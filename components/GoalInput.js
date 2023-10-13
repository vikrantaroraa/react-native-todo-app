import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput({ onAddGoal, visible, onCloseModal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const inputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText === "") return;
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
    onCloseModal();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={inputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseModal} color={"#298bfc"} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color={"#8ad176"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#c6e7d4",
  },
  textInput: {
    borderWidth: 3,
    borderColor: "#abcea1",
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    borderRadius: 6,
    overflow: "hidden",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});

export default GoalInput;
