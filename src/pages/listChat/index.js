import { View, StyleSheet } from "react-native";
import Header from "../../components/header";
import ListUsersChat from "../../components/ListUsers";
import { ConversationProvider } from "../../context/conversationContext";
export default function ListChat() {
  return (
    <ConversationProvider>
      <View style={styles.container}>
        <Header />
        <ListUsersChat />
      </View>
    </ConversationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
