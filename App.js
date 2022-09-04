import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import { useState } from "react";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(e) {
    setGoalText(e);
  }
  function AddGoal() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
  }

  function deleteHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <GoalInput goalInputHandler={goalInputHandler} AddGoal={AddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                deleteHandler={deleteHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
