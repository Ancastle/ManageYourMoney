import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import TouchableLink from "./components/Touchables/TouchableLink";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <View style={styles.main}>
      <View style={styles.titleContainer}>
        <Image
          style={styles.moneyImage}
          source={require("../assets/money.jpg")}
        ></Image>
        <Text style={styles.title}>Manage your finances</Text>
      </View>
      <TouchableLink
        containerStyles={styles.addExpenceButton}
        linkTo="/expence"
        textStyles={styles.sectionButton}
        text="Add Expence"
      />
      <TouchableLink
        containerStyles={styles.addEntryButton}
        linkTo="/entry"
        textStyles={styles.sectionButton}
        text="Add Entry"
      />
      <TouchableLink
        containerStyles={styles.viewStatusButton}
        linkTo="/status"
        textStyles={styles.sectionButton}
        text="View Status"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleContainer: {
    width: "100%",
    position: "absolute",
    top: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  moneyImage: {
    width: "100%",
    height: 400,
  },
  viewStatusButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
  addExpenceButton: {
    width: "100%",
    height: 80,
    backgroundColor: colors.dark,
    alignItems: "center",
    justifyContent: "center",
  },
  addEntryButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.base,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionButton: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default WelcomeScreen;
