import React from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "./components/Header";
import Table from "./components/Table";
import colors from "../config/colors";

function ViewStatusScreen(props) {
  const [registers, setRegisters] = React.useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("registerHistory_Key");
      const parsed = JSON.parse(value);
      setRegisters(parsed.registers);
    } catch (e) {}
  };

  React.useEffect(() => {
    if (registers.length === 0) {
      getData();
    }
  });
  return (
    <View style={styles.main}>
      <Header
        color={colors.light}
        title="View Status"
        titleColor={colors.black}
      />
      <Table data={registers} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
});

export default ViewStatusScreen;
