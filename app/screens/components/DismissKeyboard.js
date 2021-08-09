import * as React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function DismissKeyboard({ children, setIsOpenFalse }) {
  const handleClick = React.useCallback(() => {
    setIsOpenFalse(false);
    Keyboard.dismiss();
  });

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      {children}
    </TouchableWithoutFeedback>
  );
}
