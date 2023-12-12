import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
  useWindowDimensions,
} from 'react-native';
import OnBoardingScreen from './src/view/onboarding/OnBoardingScreen.tsx'
import styles from './styles.js';

export default OnBoardingItemScreen = ({item}) =>{

  const { width } = useWindowDimensions() ;

  return (
    <SafeAreaView style={[styles.containerOnBoardingItem, {width}]}>

        <ImageBackground source={item.image} style={[styles.image,{width, resizeMode:'contain'}]}>
            <Image source={require('../../assets/logo.png')} style={[styles.imageTwo,{width, resizeMode:'contain'}]}/>
        </ImageBackground>
        <View >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>

    </SafeAreaView>
  );

}
