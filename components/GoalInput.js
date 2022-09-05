import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ goalInputHandler, AddGoal, visible, endGoalHandler }) => {
  function AddGoalHandler() {
    AddGoal();
    endGoalHandler();
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/IMG.png")}
          style={styles.imageStyle}
        />
        <TextInput
          placeholder="Type Goal to Add"
          onChangeText={goalInputHandler}
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={endGoalHandler} color={"#f31282"} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={AddGoalHandler}
              color={"#b180f0"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120483",
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
