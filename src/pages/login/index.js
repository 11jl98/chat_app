import { View, StyleSheet } from "react-native";
import FormLogin from "../../components/singIn";
import { AuthProvider } from "../../context/authContext";

export default function Login() {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <FormLogin />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
