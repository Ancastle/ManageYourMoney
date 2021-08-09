import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

export default function Row(props) {
  return (
    <View style={props.rowStyle}>
      {props.isHeader ? (
        <>
          <View style={(styles.col1, styles.col)}>
            <Text>Date</Text>
          </View>
          <View style={(styles.col2, styles.col)}>
            <Text>Name</Text>
          </View>
          <View style={(styles.col3, styles.col)}>
            <Text>Value</Text>
          </View>
        </>
      ) : (
        <>
          <View style={(styles.col1, styles.col)}>
            <Text>{`${props.rowData.day.day}/${props.rowData.day.month}`}</Text>
          </View>
          <View style={(styles.col2, styles.col)}>
            <Text>{props.rowData.name}</Text>
          </View>
          <View style={(styles.col3, styles.col)}>
            <Text>{`$ ${props.rowData.value}`}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  col1: { flex: 5 },
  col2: { flex: 2 },
  col3: { flex: 2 },
  col: { justifyContent: "center" },
});
