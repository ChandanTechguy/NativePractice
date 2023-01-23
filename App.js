import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer,StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectList from './screens/ProjectList';
const Stack=createStackNavigator()


export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="ProjectList"
          component={ProjectList}
          options={({route}) =>{
            return ({title:route.params.title,
            headerStyle:{backgroundColor:route.params.color},
          headerTintColor:"white"})
          }}>

          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
 
  
  );
}