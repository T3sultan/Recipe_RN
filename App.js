import {
  TextInput,
  StyleSheet, Text, View, FlatList, Image, ScrollView, Dimensions
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const { height, width } = Dimensions.get("window");


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "List of Recipe",
            headerStyle: {
              backgroundColor: "cyan",
              // justifyContent:"center",
              // alignItems:"center",
              // marginLeft:30        
            },
            headerTitleAlign: "center",
            headerTintColor: "black"

          }}



        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: route.params.recipeItem.name


          })}
        />

      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"

  },

});
