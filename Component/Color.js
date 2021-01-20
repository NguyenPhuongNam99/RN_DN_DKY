import React,{useState} from 'react';
import {

  StyleSheet,
  View,
  Text,
  FlatList,
  Button,ScrollView,
  TextInput,TouchableOpacity,CheckBox
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const Color = (props)=>{
    const dataColor = [
    { id: 1, color: '#FF0000' },
    { id: 2, color: '#05FF00' },
    { id: 3, color: '#001AFF' },
    { id: 4, color: '#00FFF0' },
]
const handleChooseColor = props.handleChooseColor;
// const color = props.color;
    return(
        <View style={styles.left}>
        {/* <LinearGradient colors={['##FF0000', '#05FF00', '#001AFF']} style={styles.linearGradient}> */}
                <Text style={styles.text}>Color Picker</Text>
       {/* </LinearGradient> */}
       
        <View style={styles.wrap}>
              
            {dataColor.map((item) => {
            return (
                <TouchableOpacity  style={[styles.buttonTest,{backgroundColor: item.color}]} onPress={() => handleChooseColor(item)} >
                  
                  </TouchableOpacity>
            ) ;
        })}
           
        </View>
    </View>
    );
};
const styles =StyleSheet.create({
    buttonTest: {
        height: 20,
        width: 20,
        marginTop:3,
        marginHorizontal:9
    },
    left:{
       flex:1,
        // width: 168,
        height: 121,
        backgroundColor:'#FFFFFF',
        shadowRadius: 2,
            shadowOpacity: 0.5,
            elevation:6,
           // backgroundColor: '#1DC48F',
            borderRadius: 10,
       height:126,
        marginHorizontal:10
      },
      text:{
        fontFamily:'Roboto',
        fontSize:16,
        fontWeight:'normal',
        fontSize:16,
        lineHeight:19 ,
        backgroundColor: '#BD1313',
        borderRadius: 3,
        height:31,
        color:'#FFFFFF',
        paddingHorizontal:6,
        paddingVertical:5
      },
      wrap:{
        flexDirection:'row',
        marginTop:13
      }, linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
})
export default Color;