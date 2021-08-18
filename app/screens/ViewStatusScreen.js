// External Libraries
import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Context
import { AppContext } from "./components/Contexts/AppContext";

// Components
import Header from "./components/Header";
import Table from "./components/Table";

// Config
import colors from "../config/colors";

function ViewStatusScreen(props) {
  const {
    registers,
    fetchRegisters,
    hasFetchedRegisters,
    setHasFetchedRegisters,
    totalBalance,
  } = React.useContext(AppContext);

  React.useEffect(() => {
    if (!hasFetchedRegisters) {
      setHasFetchedRegisters(true);
      fetchRegisters();
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
      <Text stlye={styles.total}>{totalBalance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  total: { bottom: 15, fontSize: 20 },
});

export default ViewStatusScreen;
