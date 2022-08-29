import { useContext, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import { ContextConversation } from "../../context/conversationContext";
const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 14
  : 64;

export default function Header() {
  const { users, getUser } = useContext(ContextConversation);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => String(item.id)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <List data={item} />}
      />
    </View>
  );
}
function List({ data }) {
  return (
    <View style={styles.list}>
      <Image source={{ uri: data.avatar_url }} style={styles.avatar} />
      <View style={styles.online}></View>
      <Text style={styles.title}>{data.name_user}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffafa",
    paddingTop: statusBarHeight + 18,
    flexDirection: "row",
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: "#666",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#666",
    marginTop: 10,
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
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  online:{
    width: 16,
    height:16,
    backgroundColor: "#00c851",
    borderRadius: 22,
    position: "absolute",
    top: 60,
    left: 55,
    borderWidth: 3,
    borderColor: "#fffafa"
  }
});
