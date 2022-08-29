import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import io from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Conversation() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [text, setText] = useState("");

  const navigation = useNavigation();
  const socket = io("http://192.168.5.126:3000/");

  function getUser() {
    socket.emit("get_user");

    socket.on("get_emit_user", (data) => {
      setUsers(data);
    });
  }

  async function getMessagesByIdUser() {
    const id = await AsyncStorage.getItem('id_user')
    socket.emit("get_messages", { id: id });

    socket.on("get_emit_messages", (data) => {
      setMessages(data);
    });
  }

  async function getConversation(id_from_user, data_from_user) {

    const id_to_user = await AsyncStorage.getItem('id_user')
    console.log(id_from_user, id_to_user)
    
    socket.emit("get_conversation", { id_to_user, id_from_user });

    socket.on("get_emit_conversation", (data) => {
      setConversation(data);
      navigation.navigate("Chat", {
        data: data,
        data_from_user: data_from_user,
      });
    });
  }

  async function submitMessage(id_from_user, data_from_user) {
    const id_to_user = await AsyncStorage.getItem('id_user')

    socket.emit("on_new_message", {
      message: text,
      id_to_user: id_to_user,
      id_from_user: id_from_user,
    });
    getConversation(id_from_user, data_from_user);
    setText("");
  }

  return {
    users,
    getUser,
    messages,
    getMessagesByIdUser,
    conversation,
    getConversation,
    text,
    setText,
    submitMessage,
  };
}
