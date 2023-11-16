import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from "react";
import Main from "./pages/main";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Main"} component={Main} options={{headerShown: false }}/>
                <Stack.Screen name={"Task1"} component={Task1} options={{headerShown: false }}/>
                <Stack.Screen name={"Task2"} component={Task2} options={{headerShown: false }}/>
                <Stack.Screen name={"Task3"} component={Task3} options={{headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}