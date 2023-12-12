import * as React from 'react';
import { View, Button, Text,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './src/view/onboarding/OnBoardingScreen.tsx'
import Splash_Screen from './src/view/splash/SplashScreen.tsx'
import LoginScreen from './src/view/login/LoginScreen.tsx'
import OtpScreen from './src/view/otp/OtpScreen.tsx'
import SetupProfileMainScreen from './src/view/setup_profile/SetupProfileMainScreen.tsx'
import SetupProfileOneScreen from './src/view/setup_profile/SetupProfileOneScreen.tsx'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
               <Stack.Screen
                       name="Splash_Screen"
                       component={Splash_Screen}
                       options={{
                           headerShown: false, gestureEnabled: false,
                           swipeEnabled: false
                       }} />
               <Stack.Screen
                       name="OnBoardingScreen"
                       component={OnBoardingScreen}
                       options={{
                           headerShown: false, gestureEnabled: false,
                           swipeEnabled: false
                       }}/>
               <Stack.Screen
                       name="LoginScreen"
                       component={LoginScreen}
                       options={{
                           headerShown: false, gestureEnabled: false,
                           swipeEnabled: false
                       }}/>
               <Stack.Screen
                       name="OtpScreen"
                       component={OtpScreen}
                       options={{
                           headerShown: false, gestureEnabled: false,
                           swipeEnabled: false
                       }}/>
               <Stack.Screen
                       name="SetupProfileMainScreen"
                       component={SetupProfileMainScreen}
                       options={{
                           headerShown: false, gestureEnabled: false,
                           swipeEnabled: false
                       }}/>
               <Stack.Screen
                       name="SetupProfileOneScreen"
                       component={SetupProfileOneScreen}
                       options={{
                           headerShown: false, gestureEnabled: false,
                           swipeEnabled: false
                       }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
     <NavigationContainer>
      <MyStack />
    </NavigationContainer>
/*       <SafeAreaView>
        <View>
            <SetupProfileOneScreen />
        </View>
     </SafeAreaView> */
  );
}
