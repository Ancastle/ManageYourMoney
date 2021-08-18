// External Libraries
import React from "react";
import { View, StyleSheet } from "react-native";

function RegisterDetails(props) {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Header
          color={colors.dark}
          title={props.title}
          titleColor={colors.white}
        />
      </View>
      <View style={styles.container}>
        <TouchableAction
          containerStyles={styles.addExpenceButton}
          action={() => setIsModalOpen(true)}
          text="Go back"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%" },
  manageExpenceCategories: {
    height: 50,
    backgroundColor: colors.dark,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  addExpenceButton: {
    height: 80,
    backgroundColor: colors.base,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default RegisterDetails;
