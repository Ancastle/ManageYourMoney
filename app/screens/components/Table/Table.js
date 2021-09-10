// External Libraries
import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";

// Components
import Row from "./Row";

// Config
import colors from "../../../config/colors";

export default function Table(props) {
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState(false);

  const handlePress = React.useCallback((rowData) => {
    setRowData(rowData);
    setIsDetailOpen(true);
  });

  const data = React.useMemo(() => {
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
      <ScrollView style={styles.scrollable}>
        {rowData && (
          <Modal
            visible={isDetailOpen}
            animationIn={"slideInLeft"}
            animationOut={"slideOutRight"}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text>Name: {rowData.name}</Text>
                <Text>Value: {rowData.value}</Text>
                <Text>Date: {`${rowData.day.day}/${rowData.day.month}`}</Text>
                <Text>
                  Hour: {`${rowData.hour.hour}/${rowData.hour.minutes}`}
                </Text>
                {/* <Text>Loan: {rowData.isLoan ? "Yes" : "No"}</Text> */}
                <Text>
                  Type: {rowData.type === "entry" ? "Entry" : "Expence"}
                </Text>
                <View style={styles.actionContainer}>
                  <Pressable
                    style={styles.button}
                    onPress={() => setIsDetailOpen(false)}
                  >
                    <Text style={styles.textStyle}>Ok</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
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
      </ScrollView>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    width: 150,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollable: {
    paddingRight: 4,
    paddingLeft: 4,
  },
});
