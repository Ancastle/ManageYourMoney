import React from "react";
import { NativeRouter, Route } from "react-router-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AddEntryScreen from "./app/screens/AddEntryScreen";
import AddExpenceScreen from "./app/screens/AddExpenceScreen";
import ViewStatusScreen from "./app/screens/ViewStatusScreen";
import { ViewPagerAndroidBase } from "react-native";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={WelcomeScreen} />
      <Route path="/expence" component={AddExpenceScreen} />
      <Route path="/entry" component={AddEntryScreen} />
      <Route path="/status" component={ViewStatusScreen} />
    </NativeRouter>
  );
}
