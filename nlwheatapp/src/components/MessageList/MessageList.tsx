import React from "react";

import { Message } from "../Message/Message";

import { ScrollView } from "react-native";

import { styles } from "./styles";

const message = {
  id: "1",
  text: "Hello, world!",
  user: {
    name:  "John Doe",
    avatar_url: "https://randomuser.me/api/portraits/men/44.jpg"
  }
}

export function MessageList() {
  
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
