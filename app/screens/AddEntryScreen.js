// External Libraries
import * as React from "react";
import { StyleSheet, View } from "react-native";

// Context
import { AppContext } from "./components/Contexts/AppContext";

// Components
import Header from "./components/Header";
import AddRegisterModal from "./components/AddRegisterModal";
import Table from "./components/Table";
import TouchableAction from "./components/Touchables/TouchableAction";
// import EditCategoriesModal from "./components/EditCategoriesModal";

// Config
import colors from "../config/colors";

function AddEntryScreen(props) {
  const [isAddRegisterOpen, setIsAddRegisterOpen] = React.useState(true);

  // const [isEditingCategoriesOpen, setIsEditingCategoriesOpen] =
  //   React.useState(false);

  const {
    registers,
    fetchRegisters,
    hasFetchedRegisters,
    setHasFetchedRegisters,
    categories,
    storeRegisters,
  } = React.useContext(AppContext);

  const handleSaveRegisters = React.useCallback((newRegister) => {
    storeRegisters([newRegister, ...registers]);
    setIsAddRegisterOpen(false);
  });

  React.useEffect(() => {
    if (!hasFetchedRegisters) {
      setHasFetchedRegisters(true);
      fetchRegisters();
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
          namePlaceholder="Entry name"
          headerText="Adding new entry"
          checkboxLabel="Is this entry from a loan?"
          categories={categories}
          handleSave={handleSaveRegisters}
          handleCancel={() => setIsAddRegisterOpen(false)}
        />
        {/* <EditCategoriesModal
          isModalOpen={isEditingCategoriesOpen}
          type="entry"
          categories={categories}
          headerText={"Edit entry categories"}
          handleSave={"handleSave"}
          handleCancel={() => setIsEditingCategoriesOpen(false)}
        /> */}
      </View>
      <Table data={registers} type="entry" />
      <View style={styles.container}>
        <TouchableAction
          containerStyles={styles.addEntryButton}
          action={() => setIsAddRegisterOpen(true)}
          text="Add an Entry"
        />
        {/* <TouchableAction
          containerStyles={styles.manageEntryCategories}
          action={() => setIsEditingCategoriesOpen(true)}
          text="Manage entry categories"
        /> */}
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
