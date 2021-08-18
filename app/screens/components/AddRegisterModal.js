// External Libraries
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CurrencyInput from "react-native-currency-input";
import CheckBox from "@react-native-community/checkbox";

// Components
import DismissKeyboard from "./DismissKeyboard";

function AddRegisterModal(props) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const [nameInput, setNameInput] = React.useState("");
  const [expenceValue, setExpenceValue] = React.useState("");
  const [dropdownValue, setDropdownValue] = React.useState();
  const [isLoan, setIsLoan] = React.useState(false);

  const resetInputs = React.useCallback(() => {
    setNameInput("");
    setDropdownValue("");
    setExpenceValue("");
    setIsLoan(false);
  });

  const onClickSave = React.useCallback(() => {
    const date = new Date();
    const newRegister = {
      name: nameInput,
      category: dropdownValue,
      value: expenceValue,
      isLoan: isLoan,
      day: { day: date.getDate(), month: date.getMonth() + 1 },
      hour: { hour: date.getHours(), minutes: date.getMinutes() },
      type: props.type,
    };
    props.handleSave(newRegister);
    resetInputs();
  });

  const onClickCancel = React.useCallback(() => {
    props.handleCancel();
    resetInputs();
  });

  const isSaveDisabled = !expenceValue || !nameInput || !dropdownValue;

  return (
    <Modal
      visible={props.isModalOpen}
      animationIn={"slideInLeft"}
      animationOut={"slideOutRight"}
    >
      <DismissKeyboard setIsOpenFalse={setIsDropdownOpen}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{props.headerText}</Text>
            <TextInput
              placeholder={props.namePlaceholder}
              value={nameInput}
              style={styles.textInput}
              onChangeText={(value) => setNameInput(value)}
              onFocus={() => setIsDropdownOpen(false)}
            />
            <CurrencyInput
              value={expenceValue}
              placeholder="Enter a value"
              onChangeValue={setExpenceValue}
              prefix="COP $ "
              delimiter=","
              separator="."
              precision={0}
              style={styles.valueInput}
              onFocus={() => setIsDropdownOpen(false)}
            />
            <DropDownPicker
              open={isDropdownOpen}
              items={props.categories}
              setOpen={() => {
                setIsDropdownOpen(!isDropdownOpen);
                Keyboard.dismiss();
              }}
              setValue={(newValue) => {
                setDropdownValue(newValue);
              }}
              value={dropdownValue}
              defaultIndex={0}
              placeholder="Select a category"
              style={styles.dropdown}
              maxHeight={400}
            />

            <View style={styles.actionContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onClickCancel}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, isSaveDisabled && styles.disabled]}
                onPress={onClickSave}
                disabled={isSaveDisabled}
              >
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                disabled={false}
                value={isLoan}
                onValueChange={() => setIsLoan(!isLoan)}
              />
              <Text style={styles.checkboxText}>{props.checkboxLabel}</Text>
            </View>
          </View>
        </View>
      </DismissKeyboard>
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

export default AddRegisterModal;
