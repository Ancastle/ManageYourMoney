// External Libraries
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Link } from "react-router-native";

function Header(props) {
  return (
    <View style={[styles.header, { backgroundColor: props.color }]}>
      <TouchableOpacity style={styles.iconContainer}>
        <Link to="/" underlayColor="#f0f4f7">
          <FontAwesome
            style={styles.icon}
            size={32}
            color="white"
            name="arrow-left"
          />
        </Link>
      </TouchableOpacity>
      <Text style={[styles.title, { color: props.titleColor }]}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    width: "8%",
    left: 5,
    position: "absolute",
    top: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
