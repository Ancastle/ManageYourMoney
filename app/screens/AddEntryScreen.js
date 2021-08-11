import * as React from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "./components/Header";
import AddRegisterModal from "./components/AddRegisterModal";
import Table from "./components/Table";
import TouchableAction from "./components/Touchables/TouchableAction";

import colors from "../config/colors";

function AddEntryScreen(props) {
  const [isAddRegisterOpen, setIsAddRegisterOpen] = React.useState(true);

  const [registers, setRegisters] = React.useState([]);

  const [categories, setCategories] = React.useState([
    { label: "Comida", value: "category1" },
    { label: "Mercado", value: "category2" },
  ]);

  const handleSave = React.useCallback((newRegister) => {
    setRegisters([...registers, newRegister]);
    if (registers.length > 0) {
      storeData([...registers, newRegister]);
    }
    setIsAddRegisterOpen(false);
  });

  const handleCancel = React.useCallback(() => {
    setIsAddRegisterOpen(false);
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("registerHistory_Key");
      const parsed = JSON.parse(value);
      setRegisters(parsed.registers);
    } catch (e) {}
  };

  const storeData = async (registers) => {
    try {
      const jsonValue = JSON.stringify({ registers: registers });
      await AsyncStorage.setItem("registerHistory_Key", jsonValue);
    } catch (e) {}
  };

  React.useEffect(() => {
    if (registers.length === 0) {
      getData();
    }
  });

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Header
          color={colors.dark}
          title="Add an Entry"
          titleColor={colors.white}
        />
        <AddRegisterModal
          isModalOpen={isAddRegisterOpen}
          type="entry"
          headerText="Adding new entry"
          namePlaceholder="Entry name"
          categories={categories}
          checkboxLabel="Is this entry from a loan?"
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </View>
      <Table data={registers} type="entry" />
      <View style={styles.container}>
        <TouchableAction
          containerStyles={styles.addEntryButton}
          action={() => setIsAddRegisterOpen(true)}
          text="Add an Entry"
        />
        <TouchableAction
          containerStyles={styles.manageEntryCategories}
          action={() => console.log("TBD")}
          text="Manage entry categories"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%" },
  manageEntryCategories: {
    width: "100%",
    height: 50,
    backgroundColor: colors.dark,
    alignItems: "center",
    justifyContent: "center",
  },
  addEntryButton: {
    width: "100%",
    height: 80,
    backgroundColor: colors.base,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default AddEntryScreen;
