import { useContext, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ContextConversation } from "../../context/conversationContext";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 14
  : 64;

export default function listChat() {
  const { messages, getMessagesByIdUser, getConversation } = useContext(ContextConversation);

  useEffect(() => {
    getMessagesByIdUser();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mensagens</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <List data={item}  getConversation={getConversation}/>}
      />
    </View>
  );
}
function List({ data, getConversation }) {
  return (
    <TouchableOpacity onPress={()=>getConversation(data.id_from_user, data)}>
      <View style={styles.list}>
        <Image source={{ uri: data.avatar_url }} style={styles.avatar} />
        <View style={styles.containerText}>
          <Text style={styles.name}>{data.name_user}</Text>
          <Text style={styles.message}>{data.message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    flexDirection: "column",
    paddingBottom: 10,
    backgroundColor: '#fffafa'
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",


  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1ec8ea",
    marginTop: 10,
    marginStart: 10,
  },
  message: {
    fontSize: 13,
    color: "#989898",

  },
  containerText:{
    margin:10,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 200 / 4,
    backgroundColor: "#DCDCDC",
    borderWidth: 1.5,
    borderColor: "#666",
  },
  list: {
    flexDirection: "row",
    padding: 10,
    
  },
});
