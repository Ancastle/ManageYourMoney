// External Libraries
import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Context
import { AppContext } from "./components/Contexts/AppContext";

// Components
import Header from "./components/Header";
import Table from "./components/Table";
import { currencyFormat } from "./utils/formatters";

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
      <View style={styles.addEntryButton}>
        <Text style={styles.sectionButton}>Total Balance</Text>
      </View>
      <View style={styles.viewStatusButton}>
        <Text style={styles.sectionButton}>{currencyFormat(totalBalance)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  total: { bottom: 15, fontSize: 20 },
  sectionButton: {
    fontWeight: "bold",
    fontSize: 20,
  },
  viewStatusButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.light,
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
});

export default ViewStatusScreen;
