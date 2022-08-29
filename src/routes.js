import { createStackNavigator } from '@react-navigation/stack';
import ListChat from './pages/listChat';
import Chat from './pages/chat'
import Login from './pages/login'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="SingIn">
      <Stack.Screen name="SingIn" component={Login}  options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={ListChat}  options={{ headerShown: false }}/>
      <Stack.Screen name="Chat" component={Chat}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}


export default MyStack