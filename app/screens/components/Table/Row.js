// External Libraries
import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { currencyFormat } from "../../utils/formatters";

export default function Row(props) {
  return props.isHeader ? (
    <View style={props.rowStyle}>
      <View style={(styles.col1, styles.col)}>
        <Text>Date</Text>
      </View>
      <View style={(styles.col2, styles.col)}>
        <Text>Name</Text>
      </View>
      <View style={(styles.col3, styles.col)}>
        <Text>Value</Text>
      </View>
    </View>
  ) : (
    <Pressable
      onPress={() => props.handlePress(props.rowData)}
      style={props.rowStyle}
    >
      <View style={(styles.col1, styles.col)}>
        <Text>{`${props.rowData.day.day}/${props.rowData.day.month}`}</Text>
      </View>
      <View style={(styles.col2, styles.col)}>
        <Text>{props.rowData.name}</Text>
      </View>
      <View style={(styles.col3, styles.col)}>
        <Text>{currencyFormat(props.rowData.value)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  col1: { flex: 5 },
  col2: { flex: 2 },
  col3: { flex: 2 },
  col: { justifyContent: "center" },
});
