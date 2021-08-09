import * as React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import AddRegisterModal from "./components/AddRegisterModal";
import TouchableAction from "./components/Touchables/TouchableAction";
import Table from "./components/Table";

import colors from "../config/colors";

function AddExpenceScreen(props) {
  const [isAddRegisterOpen, setIsAddRegisterOpen] = React.useState(true);

  const [expences, setExpences] = React.useState([]);

  const [categories, setCategories] = React.useState([
    { label: "Comida", value: "Comida" },
    { label: "Mercado", value: "Mercado" },
    { label: "Lujos", value: "Lujos" },
    { label: "Salida", value: "Salida" },
    { label: "Lujo necesario", value: "Lujo necesario" },
    { label: "No se que mas", value: "No se que mas" },
  ]);

  const handleSave = React.useCallback((newExpence) => {
    setExpences([...expences, newExpence]);
    setIsAddRegisterOpen(false);
  });

  const handleCancel = React.useCallback(() => {
    setIsAddRegisterOpen(false);
  });

  console.log(expences);

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
      <Table data={expences} />
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
