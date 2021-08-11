import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import Dialog, {
  DialogContent,
  DialogFooter,
  DialogButton,
} from "react-native-popup-dialog";

import Row from "./Row";

import colors from "../../../config/colors";

export default function Table(props) {
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState(false);

  const handlePress = React.useCallback((rowData) => {
    setRowData(rowData);
    setIsDetailOpen(true);
  });

  const data = React.useMemo(() => {
    console.log(props.type);
    if (props.type === "expence") {
      return props.data.filter((register) => register.type === "expence");
    } else if (props.type === "entry") {
      return props.data.filter((register) => register.type === "entry");
    } else {
      return props.data;
    }
  }, [props.data]);

  return (
    <View style={styles.gridContainer}>
      {rowData && (
        <Dialog
          visible={isDetailOpen}
          onTouchOutside={() => {
            setIsDetailOpen(false);
          }}
          width={0.9}
          footer={
            <DialogFooter>
              <DialogButton
                text="OK"
                onPress={() => {
                  setIsDetailOpen(false);
                }}
              />
            </DialogFooter>
          }
        >
          <DialogContent>
            <Text>Name: {rowData.name}</Text>
            <Text>Value: {rowData.value}</Text>
            <Text>Date: {`${rowData.day.day}/${rowData.day.month}`}</Text>
            <Text>Hour: {`${rowData.hour.hour}/${rowData.hour.minutes}`}</Text>
            <Text>Loan: {rowData.isLoan ? "Yes" : "No"}</Text>
            <Text>Type: {rowData.type === "entry" ? "Entry" : "Expence"}</Text>
          </DialogContent>
        </Dialog>
      )}
      <Row isHeader rowStyle={styles.gridHeader} />
      {data &&
        data.map((register, index) => (
          <Row
            key={index}
            handlePress={handlePress}
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
  details: {
    width: "95%",
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
