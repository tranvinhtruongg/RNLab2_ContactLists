import React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from "../2/screens/Contacts";
import Profile from "../2/screens/Profile";
import colors from '../utils/colors';

const Stack = createNativeStackNavigator();
const StackNavigator = () =>
{
    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='Contacts'>
                <Stack.Screen name='Contacts' component={Contacts} options={{title:"Contacts"}}></Stack.Screen>
                <Stack.Screen name='Profile' component={Profile} options={{title:"Profile"}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;
