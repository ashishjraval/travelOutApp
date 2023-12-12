import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
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
      <ScrollView >
        <View style={styles.mainContainer}>


          <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.cabanaIcon}   source={require('../../assets/back_arrow.png')} />
          </TouchableOpacity>

          <Text style={styles.headingTitle}>What’s your name</Text>
          <Text style={styles.heading}>You won’t be able to change it later</Text>

          <View style={styles.flexboxContainer}>
            <TextInput placeholder="First name" style={styles.otpInput} />
            <TextInput placeholder="Last name" style={styles.otpInput} />
          </View>

          <View >
                <TouchableOpacity >
                      <View style={styles.bottom_text}>
                         <Text >This will be shown on your profile</Text>
                      </View>
                </TouchableOpacity>
          </View>

          <View style={styles.oneButton}>
            <TouchableOpacity onPress={moveToLogin}>
              <LinearGradient
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 1.0, y: 0.5 }}
                colors={[COLORS.primary.one, COLORS.primary.one]}
                style={{ borderRadius: 25 }}>
                <Text style={styles.confirmButtonText}>Continue</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

}

export default OtpScreen;
