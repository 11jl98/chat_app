import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { useContext } from "react";
  import * as Animatable from "react-native-animatable";
  import { ContextAuth } from "../../context/authContext";
  
  export default function SingIn() {
    const { name, setName, password, setPassword, singIn } = useContext(ContextAuth);
  
    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
          <Text style={styles.message}>Bem vindo(a)</Text>
        </Animatable.View>
  
        <Animatable.View
          animation="fadeInUp"
          delay={500}
          style={styles.containerForm}
        >
          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholder="Digite seu nome de usuario..."
            style={styles.input}
            onChangeText={(text) => setName(text)}
          />
  
          <Text style={styles.title}>Senha</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Sua senha"
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />
  
          <TouchableOpacity style={styles.button} onPress={singIn}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1ec8ea",
    },
    containerHeader: {
      marginTop: "14%",
      marginBottom: "8%",
      paddingStart: "5%",
    },
    message: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#FFFAFA",
    },
    containerForm: {
      flex: 1,
      backgroundColor: "#FFFAFA",
      paddingStart: "5%",
      paddingEnd: "5%",
      borderTopEndRadius: 25,
      borderTopStartRadius: 25,
    },
    title: {
      fontSize: 20,
      marginTop: 28,
    },
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
    },
    button: {
      backgroundColor: "#1ec8ea",
      borderRadius: 50,
      paddingVertical: 8,
      width: "100%",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      marginTop: 20,
    },
    buttonText: {
      color: "#FFFAFA",
      fontWeight: "bold",
    },
    buttonTextSingOut: {
      color: "#a1a1a1",
      textAlign: "center",
      paddingTop: 20,
    },
  });
  