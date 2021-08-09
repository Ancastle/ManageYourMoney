import * as React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import AddRegisterModal from "./components/AddRegisterModal";
import Table from "./components/Table";
import TouchableAction from "./components/Touchables/TouchableAction";

import colors from "../config/colors";

function AddEntryScreen(props) {
  const [isAddRegisterOpen, setIsAddRegisterOpen] = React.useState(true);

  const [entrys, setEntrys] = React.useState([]);

  const [categories, setCategories] = React.useState([
    { label: "Comida", value: "category1" },
    { label: "Mercado", value: "category2" },
  ]);

  const handleSave = React.useCallback((newEntry) => {
    setEntrys([...entrys, newEntry]);
    setIsAddRegisterOpen(false);
  });

  const handleCancel = React.useCallback(() => {
    setIsAddRegisterOpen(false);
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
      <Table data={entrys} />
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
