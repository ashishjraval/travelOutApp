import React, { Component, useState, useEffect } from 'react';
import { StatusBar, SafeAreaView, Platform, StyleSheet, View, Button, Text, Image, ImageBackground } from 'react-native';
import styles from './styles.js';

const SplashScreen = ({ navigation }) => {

    const [state, setState] = useState(true);
    const [newToken, setNewToken] = useState(false);

    Hide_Splash_Screen = async () => {
        setState(false);
    }

    setLoginCheck = async () => {

        /* const token = await getToken();
            console.log("-- try"+JSON.stringify(token));
        if(token == null){ */

            navigation.navigate('OnBoardingScreen')
         /*    <OnBoardingScreen /> */
        /* }else{
            navigation.navigate('Dashboard')
        } */
    }

    useEffect(() => {
        setTimeout(function () {
            setLoginCheck()
        }, 3000);
    })

    return (
        <SafeAreaView style={[styles.container]}>

            <StatusBar translucent backgroundColor='transparent'   barStyle="dark-content"  />

            <View >
                   <Image  source={require('../../assets/logo.png')}  />
            </View>

        </SafeAreaView>
    );
};

export default SplashScreen;