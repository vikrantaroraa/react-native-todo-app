import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoal = (enteredGoalText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
      // enteredGoalText,
    ]);
  };

  const deleteGoal = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  };

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <View style={styles.addGoalButton}>
          <Button
            title="Add New Goal"
            color={"#abcea1"}
            onPress={toggleShowModal}
          />
        </View>
        <GoalInput
          onAddGoal={addGoal}
          visible={showModal}
          onCloseModal={toggleShowModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteGoal={() => deleteGoal(itemData.item.id)}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  addGoalButton: {
    borderRadius: 6,
    overflow: "hidden",
  },
  appContainer: {
    height: "100%", // or flex: 1
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: "#fdfafa",
    // backgroundColor: "#f9efef",
    // backgroundColor: "#fbf1f1",
    // backgroundColor: "#ffecec",
  },

  goalsContainer: {
    flex: 5,
    marginTop: 16,
    // backgroundColor: "lightblue",
  },
});
