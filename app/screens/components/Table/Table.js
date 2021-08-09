import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import Row from "./Row";

import colors from "../../../config/colors";

export default function Table(props) {
  return (
    <View style={styles.gridContainer}>
      <Row isHeader rowStyle={styles.gridHeader} />
      {props.data &&
        props.data.map((register) => (
          <Row
            rowData={register}
            rowStyle={
              register.type === "expence" ? styles.expence : styles.entry
            }
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    width: "100%",
    flex: 1,
    padding: 16,
    paddingTop: 30,
  },
  gridHeader: {
    borderBottomWidth: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  entry: {
    backgroundColor: colors.entry,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  expence: {
    backgroundColor: colors.expence,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
