import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { ContextConversation } from "../../context/conversationContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64;

export default function ChatUser({ route }) {
  const { data, data_from_user } = route.params;
  const { text, setText, submitMessage } = useContext(ContextConversation);
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.containerMenu}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-thin-left" size={24} color="#000" />
        </TouchableOpacity>
        <Image
          style={styles.avatar}
          source={{
            uri: data_from_user.avatar_url,
          }}
        />
        <View>
          <Text style={styles.name}>{data_from_user.name_user}</Text>
          <View style={styles.containerDetails}>
            <View style={styles.online}></View>
            <Text style={styles.datails}>Estão em bate-papo agora</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <List data={item} />}
        />
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            placeholder="Digite sua mensagem..."
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              submitMessage(data_from_user.id_from_user, data_from_user)
            }
          >
            <Text style={{ padding: 6 }}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

function List({ data }) {
  const [id, setId] = useState("")
  const getId = async () => {
    const id = await AsyncStorage.getItem("id_user");
    setId(id);
  };
  getId()
  return (
    <View style={styles.messages}>
      <View
        style={
          data.id_to_user !== id ? styles.MessageStart : styles.MessageEnd
        }
      >
        <Text style={styles.textMessage}>{data.message}</Text>
        <Text style={styles.time_message}>{data.data_hora.split(" ")[1]}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffafa",
  },
  containerMenu: {
    paddingStart: 8,
    paddingTop: statusBarHeight + 10,
    paddingBottom: 14,
    backgroundColor: "#fffafa",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColorColor: "#000",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textInput: {
    width: "78%",
    height: 35,
    borderWidth: 1.5,
    borderColor: "#dcdcdc",
    backgroundColor: "#dcdcdc",
    padding: 6,
    borderRadius: 10,
    marginStart: 5,
  },
  messages: {
    flex: 1,
    flexDirection: "column",
  },
  button: {
    width: "17%",
    borderWidth: 2,
    borderColor: "#1ec8ea",
    backgroundColor: "#1ec8ea",
    alignItems: "center",
    borderRadius: 10,
    marginEnd: 5,
    height: 35,
  },
  MessageStart: {
    maxWidth: 170,
    width: "auto",
    height: "auto",
    backgroundColor: "#dcdcdc",
    margin: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    borderWidth: 1.5,
    borderColor: "#dcdcdc",
  },
  MessageEnd: {
    maxWidth: 210,
    width: "auto",
    height: "auto",
    backgroundColor: "#1ec8ea",
    margin: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    borderWidth: 1.5,
    borderColor: "#1ec8ea",
    marginStart: 220,
  },
  textMessage: {
    padding: 6,
    fontSize: 15,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 200 / 4,
    backgroundColor: "#DCDCDC",
    borderWidth: 1.5,
    borderColor: "#000",
    marginStart: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginStart: 10,
  },
  online: {
    width: 10,
    height: 10,
    backgroundColor: "#00c851",
    borderRadius: 22,
    marginStart: 10,
    marginEnd: 5,
    marginTop: 2,
  },
  containerDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  datails: {
    fontSize: 13,
    color: "#989898",
  },
  time_message: {
    fontSize: 10,
    alignSelf: "flex-end",
    marginEnd: 3,
  },
});
