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
    mainContainer: {
        alignContent: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        padding: 16,
        textAlign: 'auto',
    },
    cabanaIcon: {
        marginTop:30,
        alignSelf: 'right',
        width: '10%',
        height: 20,
    },
    headingTitle: {
        marginTop:15,
        alignSelf: 'right',
        color: COLORS.primary.black,
        fontFamily: FONTS.family.regular,
        textAlign: 'left',
        fontSize:25,
        left:5,
        width: '50%',
    },
    heading: {
        alignSelf: 'right',
        color: COLORS.primary.black,
        fontFamily: FONTS.family.regular,
        marginBottom: '10%',
        fontSize:12,
        left:5,
        marginTop: '2%',
        textAlign: 'left',
        width: '70%',
    },
    otpInput: {
        color: COLORS.primary.black,
        borderColor: COLORS.primary.mediumgray,
        borderRadius: 30,
        borderWidth: 1,
        fontFamily: FONTS.family.regular,
        fontSize: 24,
        height: 60,
        paddingLeft:22,
        textAlign: 'left',
        width: 60,
        marginTop:20,
    },
    question: {
        color: COLORS.primary.black,
        marginVertical: '15%',
        textAlign: 'center',
    },
    flexboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    optionsContainer: {
        marginTop: 100
    },
    button: {
        marginTop: '7%',
        width: '100%',
        },
    flexTexts: {
        color: COLORS.primary.purple,
        fontFamily: FONTS.family.semiBold,
        textAlign: 'center'
    },
    confirmButtonText: {
        color: COLORS.primary.white,
        fontFamily: FONTS.family.semiBold,
        fontSize: 18,
        padding: 15,
        textAlign: 'center',
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