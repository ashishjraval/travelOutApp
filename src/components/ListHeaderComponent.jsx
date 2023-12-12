import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { CountryButton } from "react-native-country-codes-picker";

const ListHeaderComponent = ({countries, lang, onPress}) => {
    return (
        <View style={{paddingBottom: 22}}>
            {countries?.map((country, index) => {
                return (
                    <CountryButton key={index} item={country} name={country?.name?.[lang || 'en']} onPress={() => onPress(country)} />
                )
            })}
        </View>
    )
}




export default ListHeaderComponent;
