import { View, StyleSheet } from "react-native";
import ChatUser from "../../components/chatUser";
import { ConversationProvider } from "../../context/conversationContext";

export default function Chat({ route }) {
  return (
    <ConversationProvider>
      <View style={styles.container}>
        <ChatUser route={route} />
      </View>
    </ConversationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
