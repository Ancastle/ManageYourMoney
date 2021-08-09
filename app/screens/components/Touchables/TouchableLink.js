import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

function TouchableLink(props) {
  return (
    <TouchableOpacity style={props.containerStyles}>
      <Link
        to={props.linkTo}
        underlayColor="#f0f4f7"
        style={styles.linkContainer}
      >
        <Text style={props.textStyles}>{props.text}</Text>
      </Link>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TouchableLink;
