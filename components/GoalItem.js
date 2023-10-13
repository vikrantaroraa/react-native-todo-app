import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import DeleteIcon from "../assets/images/delete-icon.svg";

function GoalItem({ text, onDeleteGoal }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItemIOS} //using function form of style prop to add style to button press on IOS.
      >
        <View style={styles.goalTextAndDeleteIconContainer}>
          <Text style={styles.goalText}>{text}</Text>
          <Pressable onPress={onDeleteGoal} style={styles.deleteIcon}>
            <DeleteIcon height={25} width={25} />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#e2eede",
    // backgroundColor: "#c0dab9",
    borderColor: "#abcea1",
    // borderColor: "#b8d5af",
    borderWidth: 2,
  },

  // goalText: {
  //   padding: 8,
  // },

  pressedItemIOS: {
    opacity: 0.6,
  },
  // deleteIcon: {
  //   borderWidth: 2,
  //   borderRadius: 4,
  //   backgroundColor: "#e6bcbc",
  // },
  goalTextAndDeleteIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
});

export default GoalItem;
