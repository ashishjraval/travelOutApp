import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors.Constants.js';
import { FONTS } from '../../constants/Font.Constant.js';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  activityIndicatorWrapper: {
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
    container: {
      flex: 1,
      marginBottom: '5%',
      marginTop: '5%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cabanaIconContainer: {
      width: '100%',
      height: 320,
    },
    cabanaIcon: {
      width: '100%',
      height: 320,
    },
    heading: {
      fontFamily: FONTS.family.medium,
      fontSize: 26,
    },
    heading_terms: {
      fontFamily: FONTS.family.medium,
      fontSize: 12,
      marginTop:15,
    },
    titleHeading: {
      textAlign: 'center',
      width: '70%',
    },
    phoneNumContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '5%',
      marginTop: '5%',
      position: 'relative',
      width: '100%',
    },
    flexbox: {
      borderColor: '#ccc',
      borderRadius: 25,
      borderWidth: 1,
      flexDirection: 'row',
      marginRight:10,
      marginLeft:10,
    },
    countryCodeContainer: {
      marginTop: 10,
    },
    inputFieldNew: {
    fontFamily: FONTS.family.regular,
    fontSize: 14,
    height: 40,
    width: 150,
    marginTop:5,
    },
    inputField: {
      height: 20,
      marginRight: 5,
      marginBottom:10,
      position: 'relative',
      width: 80,
    },
    countryCodeText: {
      fontSize: 15,
      paddingLeft: 25,
      color: '#181818',
    },
    downArrow: {
      height: 7,
      position: 'absolute',
      marginTop:6,
      right: 5,
      width: 10,
    },
    phoneInputField: {
      flex: 2,
    },
    phoneLogo: {
      paddingLeft: 20,
    },
    label: {
      color: COLORS.primary.darkgray,
      position: 'absolute',
      bottom: '80%',
      left: 0,
      width: '100%',
      textAlign: 'left',
      fontFamily: FONTS.family.regular,
      fontSize: 14,
    },
    input: {
      flex: 1,
      marginLeft: 10,
      fontSize: 20,
    },
    newUserText: {
      marginTop: '5%',
      marginBottom: '4%',
      fontFamily: FONTS.family.regular,
      fontSize: 16,
      color: COLORS.primary.black,
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '8%',
    },
    logo: {
      width: 25,
      height: 25,
      marginLeft: 15,
      marginRight: 15,
    },
    button: {
      width: '95%',
      height: 50,
      borderRadius: 25,
      overflow: 'hidden',
      marginLeft:10,
      marginRight:10,
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: COLORS.primary.white,
      fontFamily: FONTS.family.regular,
      fontSize: 18,
    },
    circleGradient: {
      margin: 1,
      backgroundColor: COLORS.primary.white,
      borderRadius: 5,
    },
    signUpText: {
      textAlign: "center",
      color: COLORS.primary.one,
      fontFamily: FONTS.family.regular,
      fontSize: 18,
      padding:10,
      right:50
    },
    flexboxTow: {
      borderColor: COLORS.primary.one,
      borderRadius: 25,
      borderWidth: 1,
      alignItems:'center',
      justifyContent: 'center',
      width:'95%',
      flex:1,
      flexDirection: 'row',
    },
    downArrowTwo: {
      height: 20,
      position: 'absolute',
      marginTop:15,
      left: 80,
      width: 80,
    },
    flexboxThree: {
      borderColor: COLORS.primary.black,
      borderRadius: 25,
      borderWidth: 1,
      alignItems:'center',
      justifyContent: 'center',
      width:'100%',
      marginTop:10,
      flexDirection: 'row',
    },
    downArrowThree: {
      height: 12,
      position: 'absolute',
      marginTop:17,
      left:-60,
      width: 17,
    },
    signUpTextThree: {
      textAlign: "center",
      color: COLORS.primary.black,
      fontFamily: FONTS.family.regular,
      fontSize: 18,
      padding:10,
      right:50
    },
    signupBtn: {
      marginBottom: '2%',
      width: '92%',

    },
    scrollview: {
      height: '100%',
    },
    title: {
      fontSize:25,
      left:-20,
      marginBottom:20,
      color:COLORS.primary.black,
      fontFamily: FONTS.family.semiBold,
    },
  });

  export default styles;