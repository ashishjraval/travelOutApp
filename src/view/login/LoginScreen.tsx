import React, { useState ,useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Alert,
  ActivityIndicator,
  Platform,
  Dimensions,
  BackHandler ,
} from 'react-native';
import InputField from '../../components/InputField.tsx';
import { COLORS } from '../../constants/Colors.Constants.js';
import styles from './style.js';
import { CountryPicker } from "react-native-country-codes-picker";
import ListHeaderComponent from '../../components/ListHeaderComponent.jsx';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";

  const SocialMediaFunc = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Other ways to connect</Text>
        <View style={styles.flexboxThree}>
            <TouchableOpacity >

                  <View >
                     <Text style={styles.signUpTextThree}>Connect with Facebook</Text>
                    <Image  source={require('../../assets/facbook.png')} style={styles.downArrowThree} />
                  </View>

            </TouchableOpacity>
        </View>
        <View style={styles.flexboxThree}>
            <TouchableOpacity >

                  <View >
                     <Text style={styles.signUpTextThree}> Connect with Google </Text>
                    <Image  source={require('../../assets/google.png')} style={styles.downArrowThree} />
                  </View>

            </TouchableOpacity>
        </View>
        <View style={styles.flexboxThree}>
            <TouchableOpacity onPress={() =>   this.RBSheet.open()}>

                  <View >
                     <Text style={styles.signUpTextThree}> Connect with Email  </Text>
                    <Image  source={require('../../assets/mail.png')} style={styles.downArrowThree} />
                  </View>

            </TouchableOpacity>
        </View>
    </View>
    );
  };

const Login = ({ navigation }) => {

  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');

  const windowHeight = Dimensions.get('window').height;

      function handleBackButtonClick() {
        navigation.goBack();
        return false;
      }

    useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
      };
    }, []);

  const handleOnClick = async () => {
        navigation.navigate('OtpScreen')
  }

    return (
    <SafeAreaView style={{ backgroundColor: COLORS.primary.white }}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            style={{ zIndex: 1100 }}
            onRequestClose={() => { }}>
            <View style={styles.modalBackground}>
              <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator animating={loading} color="black" size="large" />
              </View>
            </View>
          </Modal>
          <View style={styles.cabanaIconContainer}>
            <Image style={styles.cabanaIcon}  source={require('../../assets/login.png')} />
          </View>
          <Text style={[styles.heading, styles.titleHeading]}>
            Get started to experience the new way of travelling
          </Text>
          <View style={styles.phoneNumContainer}>
            <CountryPicker
              style={{
                countryName: {
                  color: COLORS.primary.black },
                modal: {
                  height: windowHeight - 200,
                  paddingTop: 15
                },
                line: {
                  margin: 10
                }
                }}
              show={show}
              pickerButtonOnPress={(item) => {
                setCountryCode(item.dial_code);
                setShow(false);
              }}
              onBackdropPress={() => setShow(false)}
              popularCountries={['IN', 'US']}
              ListHeaderComponent={ListHeaderComponent}
            />

            <View style={styles.flexbox}>
              <TouchableOpacity onPress={() => setShow(true)}>
                <View style={Platform.OS === 'ios' ? { marginTop: 14.5 } : { marginTop: 17 }}>
                  <View style={styles.inputField}>
                    <Text style={styles.countryCodeText}>{countryCode}</Text>
                    <Image  source={require('../../assets/down.png')} style={styles.downArrow} />
                  </View>
                </View>
              </TouchableOpacity>
             <TextInput placeholder="Enter mobile number" style={styles.inputFieldNew} keyboardType="numeric" maxLength={10}/>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
             onPress={handleOnClick} >
            <LinearGradient
              start={{ x: 0.0, y: 0.5 }}
              end={{ x: 1.0, y: 0.5 }}
              colors={[COLORS.primary.one, COLORS.primary.one]}
              style={styles.gradient}>
              <Text style={styles.text}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.newUserText}>OR</Text>

          <RBSheet
              ref={ref => {
                this.RBSheet = ref;
              }}
              height={300}
              duration={250}
              customStyles={{
                container: {
                  justifyContent: "center",
                  alignItems: "center"
                }
              }}
          >
          <SocialMediaFunc />
        </RBSheet>

          <View style={styles.flexboxTow}>
            <TouchableOpacity onPress={() =>   this.RBSheet.open()}>

                  <View >
                     <Text style={styles.signUpText}>Connect with</Text>
                    <Image  source={require('../../assets/socialmedia.png')} style={styles.downArrowTwo} />
                  </View>

            </TouchableOpacity>
          </View>

          <Text style={styles.heading_terms}>By continuing you agree to our Terms & conditions</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
    );
};
export default Login;
