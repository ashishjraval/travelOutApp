import React,{useState,useRef,useEffect} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from 'react-native';
import OnBoardingItem from './OnBoardingItemScreen.tsx'
import Svg,{ G ,Circle } from 'react-native-svg'
import AntDesign from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js';

export default NextButton = ({percentage , scrollTo , navigation}) => {

    const size = 80;
    const strokeWidth = 2;
    const center = size/2;
    const radius = size/2 - strokeWidth/2;
    const circumference = 2 * Math.PI * radius;
    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);
    const [assets, setAssets] = useState();
    const animation = (toValue) =>{
        return Animated.timing(progressAnimation,{
            toValue,
            duration:250,
            useNativeDriver:true,
        }).start();
    };

    useEffect(()=>{
        animation(percentage);
    },[percentage]);

    moveToLogin = async () => {
    console.log("-- try");
         navigation.navigate('LoginScreen')
    }

    return (
           <SafeAreaView style={styles.container}>
             <Svg width ={size} height={size}>
                <G rotation="-90"  origin={center}>
                <Circle stroke="#fff" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} fill="transparent" />

                <Circle
                    ref={progressRef}
                    stroke="#0596D1"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={ circumference }
                    fill="transparent"
                    stroke="teal"
                    strokeDashoffset={circumference - (percentage * 245)/100}

                   />
               </G>
             </Svg>



                {
                percentage != 100 &&
                <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
                   <Image   style={{ height: 50, width: 50 }} source={require('../../assets/circle.png')} />
                </TouchableOpacity>
                }

                {
                percentage == 100 &&
                <TouchableOpacity onPress={moveToLogin} style={styles.button} activeOpacity={0.6}>
                   <Image   style={{ height: 50, width: 50 }} source={require('../../assets/circle_ready.png')} />
                </TouchableOpacity>
                }



            </SafeAreaView>
    )
}
