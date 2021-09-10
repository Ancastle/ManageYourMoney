// External Libraries
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [registers, setRegisters] = React.useState([]);

  const [categories, setCategories] = React.useState([
    { label: "Salary", value: "Salary", type: "entry", enabled: true },
    {
      label: "Other entries",
      value: "Other entries",
      type: "entry",
      enabled: true,
    },
    {
      label: "Monthly payments",
      value: "Monthly payments",
      type: "expence",
      enabled: true,
    },
    { label: "Home", value: "Home", type: "expence", enabled: true },
    {
      label: "Health and hygiene",
      value: "Health and hygiene",
      type: "expence",
      enabled: true,
    },
    { label: "Transport", value: "Transport", type: "expence", enabled: true },
    {
      label: "Entertainment",
      value: "Entertainment",
      type: "expence",
      enabled: true,
    },
    {
      label: "Clothing",
      value: "Clothing",
      type: "expence",
      enabled: true,
    },
    {
      label: "Others",
      value: "Others",
      type: "expence",
      enabled: true,
    },
  ]);

  const [hasFetchedRegisters, setHasFetchedRegisters] = React.useState(false);

  const fetchRegisters = async () => {
    try {
      const value = await AsyncStorage.getItem("registerHistory_Key");
      const parsed = JSON.parse(value);
      setRegisters(parsed.registers);
    } catch (e) {
      console.log("There was an error trying to fetch the Registers data");
    }
  };

  const storeRegisters = async (newRegisters) => {
    try {
      setRegisters(newRegisters);
      const jsonValue = JSON.stringify({ registers: newRegisters });
      await AsyncStorage.setItem("registerHistory_Key", jsonValue);
    } catch (e) {
      console.log("There was an error trying to store the Registers data");
    }
  };

  const totalBalance = React.useMemo(() => {
    let aux = 0;
    registers.map((register) =>
      register.type === "entry"
        ? (aux = aux + register.value)
        : (aux = aux - register.value)
    );
    return aux;
  }, [registers]);

  return (
    <AppContext.Provider
      value={{
        registers,
        fetchRegisters,
        hasFetchedRegisters,
        setHasFetchedRegisters,
        totalBalance,
        categories,
        storeRegisters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
