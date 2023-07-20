import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contacts from "./src/pages/Contacts/"
import Information from "./src/pages/Information/"
import appContacts from "./src/pages/appContacts";

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();

function Tabs(){
    <Tabs.Navigator>
        <Tabs.Screen name='AppContacts' component={appContacts}></Tabs.Screen>
        <Tabs.Screen name='Contacts' component={Contacts}></Tabs.Screen>

    </Tabs.Navigator>

}
export default function App(){
  return(
      <NavigationContainer>
          <Stack.Navigator>
                <Stack.Screen name='AppContacts' component = {Tabs}/>
                <Stack.Screen name='Information' component = {Information}/>
          </Stack.Navigator>
      </NavigationContainer>
  )
}