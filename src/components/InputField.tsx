import React, { useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { FONTS } from '../constants/Font.Constant.js';
const InputField = (props) => {

    const [checkUser, setCheckUser] = useState("");
    const [loading, setLoading] = useState(false);


  return (
    <View style={{flex: 1}}>
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.inputContainer}>
            <Modal
                transparent={true}
                animationType={'none'}
                visible={loading}
                style={{ zIndex: 1100 }}
                onRequestClose={() => { }}>
                        <View style={styles.modalBackground}>
                          <View style={styles.activityIndicatorWrapper}>
                            <ActivityIndicator animating={loading} color="black" size="large"/>
                          </View>
                        </View>
            </Modal>
            <Image style={[styles.icon, props.iconStyle]} source={props.source} />
            <TextInput
            style={[styles.inputField, props.textStyle]}
            keyboardType={props.keyboardType}
            maxLength={props.maxLength}
            onChangeText={props.onChangeText}
            value={props.value}
            multiline={props.multiline}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            editable={props.editable}
            autoCapitalize={props.autoCapitalize}
            />
            {
                props.rightSideIcon ?  <TouchableOpacity >
                                       <Image style={[styles.icon_right]}
                                        source={checkUser ? props.rightSideIcon_verify : props.rightSideIcon} />
                                        </TouchableOpacity> : null

            }
       </View>
    </View>
  );
};

/*
  Props to Pass:
  <InputField
    label
    source
    iconStyle
    textStyle
    keyboardType
    maxLength
    onChangeText
    value
    multiline
    placeholder
    rightSideIcon
  />
*/

const styles = StyleSheet.create({
    label: {
        color: '#9a9c9c',
        fontSize: 14,
        fontFamily: FONTS.family.regular,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        height: 15,
        left: 20,
        position: 'absolute',
        top: 15,
        width: 18,
    },
    icon_right: {
        height: 25,
        right:15,
        position: 'absolute',
        top: 10,
        width: 40,
    },
    inputField: {
        borderColor: '#ccc',
        borderRadius: 8,
        borderWidth: 1,
        flex: 1,
        fontFamily: FONTS.family.regular,
        fontSize: 14,
        height: 45,
        paddingLeft: 40,
    },
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
  });

export default InputField;
