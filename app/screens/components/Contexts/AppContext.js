// External Libraries
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [registers, setRegisters] = React.useState([]);

  const [categories, setCategories] = React.useState([
    { label: "Salario", value: "Salario", type: "entry" },
    { label: "Comida", value: "Comida", type: "expence" },
    { label: "Mercado", value: "Mercado", type: "expence" },
    { label: "Lujos", value: "Lujos", type: "expence" },
    { label: "Salida", value: "Salida", type: "expence" },
    { label: "Lujo necesario", value: "Lujo necesario", type: "expence" },
    { label: "No se que mas", value: "No se que mas", type: "expence" },
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
        ? (aux = aux - register.value)
        : (aux = aux + register.value)
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
