import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

const Draw_Detail_Profile = ({navigation})=>{
    return(
        <View style={styles.header}>
            <View style={styles.left}> 
                    <View style={styles.content}>
                    <Image style={styles.tinyLogo} 
                    source={{ uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/83040435_175874177153572_7388585565899194368_n.jpg?_nc_cat=102&ccb=3&_nc_sid=174925&_nc_ohc=aBR7udIv6I4AX8WuHxC&_nc_ht=scontent.fhan2-1.fna&oh=5cdfcc615b5a1b7d1208c0605ab8b3dd&oe=60677D85' }} />
                        <Text style={styles.text}>Nguyễn Phương Nam</Text>
                    </View>
            </View>
            <View style={styles.right}>

            </View>
        </View>
    );
};

const styles= StyleSheet.create({

    header:{
        flex:1,
        flexDirection:'row'
    },
    left:{
        flex:1,
        backgroundColor:'#FFFFFF',
        // marginRight:60
       // justifyContent:'center',
        // alignItems:'flex-start'
    },
    content:{
      marginVertical:120,
      //marginRight:70
      textAlign:'center',
      paddingRight:240
    },
    right:{
        flex:1,
        backgroundColor: 'rgba(123, 123, 123, 0.3)',
      opacity:0.1
       
    },
    tinyLogo: {
        width: 68,
        height: 68,
        borderRadius: 31,
        position: "absolute",
        top: -30,
        left: 150

    },
    text:{
        color: '#323232',
        fontWeight: 'bold',
    }
})
export default Draw_Detail_Profile;