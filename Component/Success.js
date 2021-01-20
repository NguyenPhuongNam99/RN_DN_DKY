import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image, Button} from 'react-native';
import Screen3 from './Screen3';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Success(props){
    return (
        <View style={styles.logo}>
           
            <Image style={styles.tinyLogo}
        source={{uri:'https://cdn0.iconfinder.com/data/icons/basic-7/97/20-512.png'}}/>
        <Text style={styles.text}>You have successfully fixed the color and font size.</Text>
        <TouchableOpacity
        style={styles.button}
        
      >
        <Text onPress={() => { props.navigation.navigate('Screen3', {color: props.route.params.color, size: props.route.params.size, todos: props.route.params.todos}) }} style={{color:'#FFFFFF',fontWeight:'400',fontSize:16}}>View Detail</Text>
      </TouchableOpacity>
      {/* <Button title='View Detail'color="red" style={{flex:1}}/> */}
        </View>
    )
}
const styles  = StyleSheet.create({
    tinyLogo:{
        width:100,
        height:100,
       
       
    },logo:{
         justifyContent:'center',
        alignItems:'center',
        display:'flex',
        marginTop:50
    },
    text:{
        fontSize:16,
        width:266,
        fontWeight:'400',
        lineHeight:18.75,
        fontFamily:'Roboto',
        textAlign:'center',
        marginTop:10,
       
    }, button: {
        alignItems: "center",
        backgroundColor: "#BD2B26",
        width:353,
        height:48,
        borderRadius:24,
        alignItems:'center',
        paddingTop:10,
        marginTop:40 ,
        
      },
     
})