import { Dimensions, StyleSheet, View, Image } from 'react-native';
const { width, height } = Dimensions.get('window');
import { COLORS } from '../../constants/Colors.Constants.js';
import { FONTS } from '../../constants/Font.Constant.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:30,
    backgroundColor: COLORS.primary.white,
  },
  blue: {
    position: 'absolute',
    top: 100,
    left: 30,
    width: 30,
    height: 30
  },
  green: {
    position: 'absolute',
    top: 150,
    width: 130,
    height: 25
  },
  red: {
    position: 'absolute',
    top: 200,
    right: 30,
    width: 20,
    height: 20
  },
  large_img: {
    position: 'absolute',
    width: "100%",
    height: "30%",
    resizeMode: 'cover',
    opacity: 0.5,
    bottom:0,
  },
    button: {
        marginTop: '7%',
        width: '80%',
        marginLeft:20,
        marginRight:20,

        },
    confirmButtonText: {
        color: COLORS.primary.white,
        fontFamily: FONTS.family.semiBold,
        fontSize: 18,
        padding: 15,
        textAlign: 'center',
    },
    textOne: {
        color: COLORS.primary.black,
        fontFamily: FONTS.family.regular,
        textAlign: 'center',
        fontSize:15,
        left:5,
        width: '50%',
    },
    textTow: {
        color: COLORS.primary.black,
        fontFamily: FONTS.family.semiBold,
        fontSize: 25,
        padding: 15,
        textAlign: 'center',
    },

    mainContainer: {
        flex: 1,
        paddingTop: '5%',
        padding: 16,
        height,
        width,
    },
    cabanaIcon: {
        marginTop:30,
        width: '10%',
        height: 20,
    },
    headingTitle: {
        marginTop:15,
        color: COLORS.primary.black,
        fontFamily: FONTS.family.regular,
        textAlign: 'left',
        fontSize:25,
        left:5,
        width: '80%',
    },
    heading: {
        color: COLORS.primary.black,
        fontFamily: FONTS.family.regular,
        marginBottom: '10%',
        fontSize:12,
        left:5,
        marginTop: '2%',
        textAlign: 'left',
        width: '70%',
    },
    bottom_text: {
        color: COLORS.primary.black,
        fontFamily: FONTS.family.regular,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:12,
        marginTop: '6%',
        textAlign: 'center',
        width: '100%',
    },
    otpInput: {
        color: COLORS.primary.black,
        borderColor: COLORS.primary.mediumgray,
        borderRadius: 30,
        borderWidth: 1,
        fontFamily: FONTS.family.regular,
        fontSize: 24,
        paddingLeft:20,
        height: 50,
        textAlign: 'left',
        width: "100%",
        marginTop:20,
    },
    oneButton: {
        marginTop: '7%',
        width: '100%',
        bottom:0,
        },
    flexboxTow: {
      borderColor: COLORS.primary.medium_gray,
      borderRadius: 25,
      borderWidth: 1,
      alignItems:'center',
      justifyContent: 'center',
      width:'100%',
      flexDirection: 'row',
      marginTop:150,
    },
    signUpTextThree: {
      textAlign: "center",
      color: COLORS.primary.dark_gray,
      fontFamily: FONTS.family.regular,
      fontSize: 18,
      padding:10,
    },
});
export default styles;