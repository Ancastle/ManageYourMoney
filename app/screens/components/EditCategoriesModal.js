// External Libraries
import React from "react";
import { View, StyleSheet, Text, Modal, Pressable } from "react-native";
import CheckBox from "@react-native-community/checkbox";

function EditCategoriesModal(props) {
  const onClickCancel = React.useCallback(() => {
    props.handleCancel();
  });

  const categories = React.useMemo(
    () => props.categories.filter((category) => category.type === props.type),
    [props.categories]
  );

  return (
    <Modal
      visible={props.isModalOpen}
      animationIn={"slideInLeft"}
      animationOut={"slideOutRight"}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{props.headerText}</Text>
          <Text style={styles.modalText}>Select a category to disable</Text>
          {categories.map((category, index) => (
            <View style={styles.checkboxContainer} key={index}>
              <CheckBox
                disabled={false}
                value={category.enabled}
                onValueChange={(e) => console.log(e)}
              />
              <Text style={styles.checkboxText}>{category.label}</Text>
            </View>
          ))}
          <Text style={styles.modalText}>Select a category to enable</Text>
          <View style={styles.actionContainer}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onClickCancel}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={""}>
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textInput: {
    backgroundColor: "#b5b5b5",
    width: 300,
    borderRadius: 15,
    paddingLeft: 10,
    marginBottom: 20,
  },
  valueInput: {
    width: 300,
    borderRadius: 15,
    paddingLeft: 10,
    backgroundColor: "#ff9c9c",
  },
  dropdown: {
    marginBottom: 200,
    marginTop: 50,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    width: 150,
  },
  buttonClose: {
    marginRight: 15,
  },
  disabled: { backgroundColor: "#b5b5b5" },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  checkboxContainer: { flexDirection: "row", marginTop: 15 },
  checkboxText: { fontSize: 13, top: 7 },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default EditCategoriesModal;
