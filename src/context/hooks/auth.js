import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import io from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function AuthUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const socket = io("http://192.168.5.126:3000/");

  function singIn() {
    socket.emit("auth", { name_user: name, password: password });
    socket.on("auth_emit", async (data) => {
      if (data.message) {
        return alert(data.message);
      } else {
        await AsyncStorage.setItem("id_user", data.id);
        navigation.navigate("Home");
      }
    });
  }

  return { name, setName, password, setPassword, singIn };
}
