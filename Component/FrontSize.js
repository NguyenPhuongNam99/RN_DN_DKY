import React,{useState} from 'react';
import {

  StyleSheet,
  View,
  Text,
  FlatList,
  Button,ScrollView,
  TextInput,TouchableOpacity,CheckBox
} from 'react-native';

const FrontSize = (props)=>{
  const size = props.size;
  const Up = () => {
      if (size < 50) {

          handleChooseSize(size + 1);
      }
  }
  const reset = () => {
      setSize(0)
  }
  const Down = () => {
      if (size > 0) {

          handleChooseSize(size - 1);
      }
  }
  // const size = props.size;
 
const handleChooseSize=props.handleChooseSize;
    return(
        <View style={styles.right}>
        <Text style={styles.text}>Font Size </Text>
        <View style={styles.adjust}>
            <Text style={{ color:'#000000',fontSize:15,marginLeft:5}}>Size</Text>
           
                <Text style={{backgroundColor:'#F3F3F3',width:130,height:20,marginLeft:8,paddingLeft:10,color:'#000000'}}>{size}</Text>
            
            {/* <TextInput style={styles.input} value={count} onChangeText={count => setCount(count)}Size
 keyboardType="number-pad" placeholderTextColor="red" /> */}
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:13}}>
          <TouchableOpacity >
            <Text onPress={Up} style={{width:72,height:28,backgroundColor:"#BD2B26",color:'#fff',textAlign:'center',paddingTop:2,marginTop:10,borderRadius:10}}>Up</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text onPress={Down} style={{width:72,height:28,backgroundColor:"#BD2B26",color:'#fff',textAlign:'center',paddingTop:2,marginTop:10,borderRadius:10}}>Down</Text>
          </TouchableOpacity>
           
        </View>
    </View>
    );
};
const styles =StyleSheet.create({
    right:{
        flex:1,
        // width: 168,
        height: 121,
        //backgroundColor: '#FFFFFF',
        fontFamily:'Roboto',
        fontSize:16,
        fontWeight:'bold',
        color: 'blue',
        shadowRadius: 2,
            shadowOpacity: 0.5,
            elevation:6,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            height:126,marginHorizontal:10
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
        paddingVertical:5,
        //textAlign:'center'
      },
      adjust:{
        flexDirection:'row',
        marginVertical:10,
        marginTop:15,
        color:'#000000'
      },
})
export default FrontSize;