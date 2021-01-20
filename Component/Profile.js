import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,TouchableOpacity,Image
  } from 'react-native';
const Profile =()=>{

    return(
      
        <View style={styles.container}>
           <View style={styles.pro}>
           <Image style={styles.tinyLogo}
        source={{uri:'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/83040435_175874177153572_7388585565899194368_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=CzyMQ9oPIVEAX9aEnEE&_nc_ht=scontent.fhan3-1.fna&oh=674b15ff9b646250e21d1b40829798db&oe=602C2A05'}}/>
           </View>
            <View style={styles.header}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Nguyễn Phương Nam</Text>
                <Text style={{color:'#3784FF',fontSizeL:12,fontWeight:'bold'}}>Thay đổi ảnh đại diện</Text>
            </View>
        </View>
       
        
    );
    
}
const styles=StyleSheet.create({
    container:{
        // backgroundColor:'green',
        // backgroundColor:'green',
       // flex:1,
        backgroundColor:'#FFFFFF',
        elevation:9,
        height:400,
        marginHorizontal:18,marginVertical:40
    },
    tinyLogo:{
        width:68,
        height:68,
       borderRadius:31,
       position:"absolute",
       top:-30,
       left:150
       
    },
    header:{
        marginVertical:50,
        justifyContent:'center',
        alignItems:'center'
       
    }

})
export default Profile;