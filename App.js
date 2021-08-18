import React from "react";
import { NativeRouter, Route } from "react-router-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AddEntryScreen from "./app/screens/AddEntryScreen";
import AddExpenceScreen from "./app/screens/AddExpenceScreen";
import ViewStatusScreen from "./app/screens/ViewStatusScreen";
import AppProvider from "./app/screens/components/Contexts/AppContext";

export default function App() {
  return (
    <NativeRouter>
      <AppProvider>
        <Route exact path="/" component={WelcomeScreen} />
        <Route path="/expence" component={AddExpenceScreen} />
        <Route path="/entry" component={AddEntryScreen} />
        <Route path="/status" component={ViewStatusScreen} />
      </AppProvider>
    </NativeRouter>
  );
}
