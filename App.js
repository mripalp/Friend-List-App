import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FriendList from "./components/FriendList";
import FriendDetail from "./components/FriendDetail";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FriendList">
        <Stack.Screen
          name="FriendList"
          component={FriendList}
          options={{
            title: "Daftar Teman",
            headerStyle: {
              backgroundColor: "#3498db",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="FriendDetail"
          component={FriendDetail}
          options={{
            title: "Detail",
            headerStyle: {
              backgroundColor: "#3498db",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
