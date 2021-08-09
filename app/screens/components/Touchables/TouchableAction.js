import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function TouchableAction(props) {
  return (
    <TouchableOpacity style={props.containerStyles} onPress={props.action}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "normal",
    fontSize: 20,
  },
});

export default TouchableAction;
