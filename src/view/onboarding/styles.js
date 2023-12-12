import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(
{
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontWeight: '800',
        fontSize: 28,
        marginBottom:10,
        marginTop:10,
        color:'#493d8a',
        textAlign:'center',
    },
    description:{
        fontWeight:'300',
        color:'#62656b',
        marginTop:10,
        textAlign:'center',
        paddingHorizontal:64,
    },
    containerOnBoardingItem:{
        flex: 1,
    },
    image:{
          flex: 1,
          justifyContent: 'center',
    },
    imageTwo:{
           flex: 0.1,
           marginBottom: 250,
    },
    button:{
            position:'absolute',
            borderRadius:100,
            padding:20,
    },
});

export default styles;