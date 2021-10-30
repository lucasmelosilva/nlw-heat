import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SigninBox } from "../../components/SigninBox";
import { SendMessageForm } from "../../components/SendMessageForm/intex";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      <SigninBox />
    </View>
  );
}
