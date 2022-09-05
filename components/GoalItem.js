import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
const GoalItem = ({ text, deleteHandler, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => deleteHandler(id)}
        android_ripple={{ color: "#fff" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
