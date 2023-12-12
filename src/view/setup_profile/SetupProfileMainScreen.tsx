import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Alert,
  ActivityIndicator,
  Modal,
  Dimensions,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { COLORS } from '../../constants/Colors.Constants.js';


const OtpScreen = ({ navigation }) => {

    moveToLogin = async () => {
    console.log("-- try");
         navigation.navigate('SetupProfileMainScreen')
    }

  return (
  <SafeAreaView>
      <ScrollView style={styles.scrollview}>
  <View style={styles.container}>

    <Image
      style={styles.blue}
      source={require('../../assets/star_one.png')}
    />
    <Image
      style={styles.green}
      source={require('../../assets/logo.png')}
    />
    <Image
      style={styles.red}
      source={require('../../assets/star_two.png')}
    />
    <Text style={styles.textOne} > HELLO TRAVELLER 👋🏻 </Text>
    <Text style={styles.textTow}> We are thrilled to have you join our exceptional traveling community </Text>

      <View style={styles.button}>
        <TouchableOpacity onPress={moveToLogin}>
          <LinearGradient
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1.0, y: 0.5 }}
            colors={[COLORS.primary.one, COLORS.primary.one]}
            style={{ borderRadius: 25 }}>
            <Text style={styles.confirmButtonText}>Let’s setup your profile</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

    <Image
      style={styles.large_img}
       resizeMode='cover'
      source={require('../../assets/bg_setup_profile.png')}
    />
  </View>
      </ScrollView>
    </SafeAreaView>
  );

}

export default OtpScreen;

