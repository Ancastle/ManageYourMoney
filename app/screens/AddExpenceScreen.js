// External Libraries
import * as React from "react";
import { StyleSheet, View } from "react-native";

// Context
import { AppContext } from "./components/Contexts/AppContext";

// Components
import Header from "./components/Header";
import AddRegisterModal from "./components/AddRegisterModal";
import TouchableAction from "./components/Touchables/TouchableAction";
import Table from "./components/Table";

// Config
import colors from "../config/colors";

function AddExpenceScreen(props) {
  const [isAddRegisterOpen, setIsAddRegisterOpen] = React.useState(true);

  const {
    registers,
    fetchRegisters,
    hasFetchedRegisters,
    setHasFetchedRegisters,
    categories,
    storeRegisters,
  } = React.useContext(AppContext);

  const handleSave = React.useCallback((newRegister) => {
    storeRegisters([newRegister, ...registers]);
    setIsAddRegisterOpen(false);
  });

  const handleCancel = React.useCallback(() => {
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
          title="Add an Expence"
          titleColor={colors.white}
        />
        <AddRegisterModal
          isModalOpen={isAddRegisterOpen}
          type="expence"
          headerText="Adding new expence"
          namePlaceholder="Expence name"
          categories={categories}
          checkboxLabel="Is this expence a loan?"
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </View>
      <Table data={registers} type="expence" />
      <View style={styles.container}>
        <TouchableAction
          containerStyles={styles.addExpenceButton}
          action={() => setIsAddRegisterOpen(true)}
          text="Add an Expence"
        />
        <TouchableAction
          containerStyles={styles.manageExpenceCategories}
          action={() => console.log("TBD")}
          text="Manage expence categories"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%" },
  manageExpenceCategories: {
    height: 50,
    backgroundColor: colors.dark,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  addExpenceButton: {
    height: 80,
    backgroundColor: colors.base,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default AddExpenceScreen;
