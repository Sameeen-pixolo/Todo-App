import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  FlatList,
  Image,
  Pressable,
} from "react-native";

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todoListCompleted, setTodoListCompleted] = useState<string[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  // Function to handle submit or end of editing event on input field.
  const handleSubmit = () => {
    if (inputValue.length > 0) {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };

  const NoTasksTodoFallback = () => {
    return <p style={styles.fallbackText}>No Tasks in Todo .</p>
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={inputValue}
        style={styles.textInput}
        placeholder="Enter task"
        onChangeText={setInputValue}
        cursorColor="white"
        onSubmitEditing={handleSubmit}
        onEndEditing={handleSubmit}
      />

      {/* Todo list */}
      <FlatList
        style={styles.flatListStyle}
        ListEmptyComponent={NoTasksTodoFallback}
        data={todoList}
        renderItem={({ item, index, separators }) => (
          <View style={styles.todoItem}>
            {
              // isEditMode ? (
              //   <TextInput
              //     value={item}
              //     style={styles.textInput}
              //     onChangeText={setInputValue}
              //     cursorColor="white"
              //     onEndEditing={() => {
              //       if (inputValue.length > 0) {
              //         setTodoList([...todoList, inputValue]);
              //         setInputValue("");
              //         setIsEditMode(false)
              //       }
              //     }}
              //   />
              // ) :
              <Text style={styles.todoText} onPress={() => setIsEditMode(true)}>
                {item}
              </Text>
            }

            <Pressable
              style={styles.buttonStyle}
              onPress={() => {
                const tempArray = [...todoList];
                if (index > -1) {
                  // only splice array when item is found
                  tempArray.splice(index, 1); // 2nd parameter means remove one item only
                  setTodoList([...tempArray]);
                  setTodoListCompleted([...todoListCompleted, todoList[index]]);
                }
              }}
            >
              <Image
                source={require("@/assets/images/bin.png")}
                style={{ backgroundColor: "white", height: 20, width: 20 }}
              ></Image>
            </Pressable>
          </View>
        )}
      />

      {/* Completed Todo list */}
      <FlatList
        style={styles.flatListStyle}
        data={todoListCompleted}
        renderItem={({ item, index, separators }) => (
          <View style={styles.todoItem}>
            <Text style={[styles.todoCompleted, styles.todoText]}>{item}</Text>

            <View style={styles.buttonsContainer}>
              {/* Delete item */}
              <Pressable
                style={styles.buttonStyle}
                onPress={() => {
                  const tempArray = [...todoListCompleted];
                  if (index > -1) {
                    // only splice array when item is found
                    tempArray.splice(index, 1); // 2nd parameter means remove one item only
                    setTodoListCompleted([...tempArray]);
                  }
                }}
              >
                <Image
                  source={require("@/assets/images/bin.png")}
                  style={{ backgroundColor: "white", height: 20, width: 20 }}
                ></Image>
              </Pressable>

              {/* Restore item */}
              <Pressable
                style={styles.buttonStyle}
                onPress={() => {
                  setTodoList([...todoList, todoListCompleted[index]]);
                  const tempArray = [...todoListCompleted];
                  if (index > -1) {
                    // only splice array when item is found
                    tempArray.splice(index, 1); // 2nd parameter means remove one item only
                    setTodoListCompleted([...tempArray]);
                  }
                }}
              >
                <Image
                  source={require("@/assets/images/restore.png")}
                  style={{ backgroundColor: "white", height: 20, width: 20 }}
                ></Image>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}

// ------------- STYLESHEET --------------------

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "grey",
    flex: 1,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 6,
    width: "80%",
    fontSize: 14,
    lineHeight: 14,
    padding: 10,
    color: "black",
  },
  flatListStyle: {
    marginTop: 10,
    width: "80%",
  },
  todoItem: {
    width: "100%",
    display: "flex",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "white",
    marginBottom: 6,
  },
  buttonStyle: { padding: 2 },
  todoText: { maxWidth: "75%" },
  todoCompleted: {
    textDecorationLine: "line-through",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  fallbackText:{
    textAlign:"center",
    fontFamily:"Segoe UI",
    fontSize:12
  }
});
