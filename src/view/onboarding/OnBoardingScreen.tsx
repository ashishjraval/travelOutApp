import React,{useState,useRef} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Animated,
} from 'react-native';
import slides from './slides.js'
import OnBoardingItem from './OnBoardingItemScreen.tsx'
import NextButton from './NextButton.js'
import styles from './styles.js';

export default OnBoardingScreen = ({ navigation }) =>{
    const [currentIndex,setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

    const scrollTo = () =>{
        if(currentIndex < slides.length - 1){
            slidesRef.current.scrollToIndex({ index: currentIndex + 1})
        } else {

        }
    };
    return (
           <SafeAreaView style={[styles.container]}>

                  <View style={{flex: 2.5}}>
                        <FlatList
                            data={slides}
                            renderItem={( {item} ) => <OnBoardingItem item={item} /> }
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            bounces={false}
                            keyExtractor={(item) => item.id}
                            onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
                                useNativeDriver:false,
                            })}
                            scrollEventThrottle={32}
                            onViewableItemsChanged={viewableItemsChanged}
                            viewabilityConfig={viewConfig}
                            ref={slidesRef}
                        />
                  </View>

                  <NextButton navigation = {navigation} scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)}/>

            </SafeAreaView>
    )
}
