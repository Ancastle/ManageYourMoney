import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import Header from "./components/Header";
import colors from "../config/colors";

function ViewStatusScreen(props) {
  return (
    <View style={styles.main}>
      <Header
        color={colors.light}
        title="View Status"
        titleColor={colors.black}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
});

export default ViewStatusScreen;
