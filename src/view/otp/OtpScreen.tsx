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
import SetupProfileOneScreen from './src/view/setup_profile/SetupProfileOneScreen.tsx'
const OtpScreen = ({ navigation }) => {

 const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput1 = (text) => {
    setNum1(text);
    if (text.length === 1) {
      input2.current.focus();
    }
    if (text.length === 4) {
      setNum1(text.substring(0, 1));
      setNum2(text.substring(1, 2));
      setNum3(text.substring(2, 3));
      setNum4(text.substring(3, 4));
    }
  };

  const handleInput2 = (text) => {
    setNum2(text);
    if (text.length === 1) {
      input3.current.focus();
    } else {
      input1.current.focus();
    }
  };

  const handleInput3 = (text) => {
    setNum3(text);
    if (text.length === 1) {
      input4.current.focus();
    } else {
      input2.current.focus();
    }
  };

  const handleInput4 = (text) => {
    setNum4(text);
    if (text.length === 0) {
      input3.current.focus();
    }
  };

  const route = useRoute();
  //const { phoneNumber } = route.params;
    moveToLogin = async () => {
    console.log("-- try");
         navigation.navigate('SetupProfileOneScreen')
    }
  return (
  <SafeAreaView>
      <ScrollView style={styles.scrollview}>
        <View style={styles.mainContainer}>
          <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            style={{ zIndex: 1100 }}
            onRequestClose={() => { }}>
            <View style={styles.modalBackground}>
              <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator animating={loading} color="black" size="large" />

                {/* If you want to image set source here */}
                {/* <Image
                          source={require('../assets/images/loader.gif')}
                          style={{ height: 80, width: 80 }}
                          resizeMode="contain"
                          resizeMethod="resize"
                        /> */}
              </View>
            </View>
          </Modal>

          <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.cabanaIcon}   source={require('../../assets/back_arrow.png')} />
          </TouchableOpacity>

          <Text style={styles.headingTitle}>Verify number</Text>
          <Text style={styles.heading}>We’ve sent code to +49 17635262977</Text>

          <View style={styles.flexboxContainer}>
            <TextInput ref={input1} value={num1} style={styles.otpInput} maxLength={4} onChangeText={handleInput1} keyboardType="numeric" />
            <TextInput ref={input2} value={num2} style={styles.otpInput} maxLength={1} onChangeText={handleInput2} keyboardType="numeric" />
            <TextInput ref={input3} value={num3} style={styles.otpInput} maxLength={1} onChangeText={handleInput3} keyboardType="numeric" />
            <TextInput ref={input4} value={num4} style={styles.otpInput} maxLength={1} onChangeText={handleInput4} keyboardType="numeric" />
          </View>

          <View style={styles.flexboxTow}>
                <TouchableOpacity >
                      <View >
                         <Text style={styles.signUpTextThree}>Resend code in 0:59</Text>
                      </View>
                </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={moveToLogin}>
              <LinearGradient
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 1.0, y: 0.5 }}
                colors={[COLORS.primary.one, COLORS.primary.one]}
                style={{ borderRadius: 25 }}>
                <Text style={styles.confirmButtonText}>Verify</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

}

export default OtpScreen;
