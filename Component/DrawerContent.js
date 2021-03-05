import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View,Text,TouchableOpacity, StyleSheet,Image} from 'react-native';
// import Profile from './Profile';
const DrawerContent= (props)=>{
    return(
        <View style={styles.header}>
           <View style={styles.content}>
                <View style={styles.content_header}>

                </View>
                <Image style={styles.tinyLogo}
                source={{ uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/83040435_175874177153572_7388585565899194368_n.jpg?_nc_cat=102&ccb=3&_nc_sid=174925&_nc_ohc=aBR7udIv6I4AX8WuHxC&_nc_ht=scontent.fhan2-1.fna&oh=5cdfcc615b5a1b7d1208c0605ab8b3dd&oe=60677D85' }} />
                <Text style={styles.content_header} onPress= {()=>props.navigation.navigate('Detail_Profile')}>Nguyễn Phương Nam</Text>
               
            </View>
            <View style={styles.footer}>
                 <TouchableOpacity style={styles.tou} onPress={()=>props.navigation.navigate('Dangnhap')}>
                    <Text style={styles.button}>Đăng Xuất</Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
};
const styles =StyleSheet.create({
    header:{
        flex:1
    },
tinyLogo: {
        marginVertical:20,
        width: 68,
        height: 68,
        borderRadius:26,
       
        alignSelf:'center'
    },
    content_header:{
        fontSize:17,
        alignSelf:'center',
        fontWeight:'bold'
    },
    button:{
       
        backgroundColor:'#C3333C',
        height:40,
        width:'93%',
        paddingHorizontal:90,
        paddingVertical:7,
        marginLeft:10,
        marginRight:40
    
       
    },footer:{
        position:'absolute',
        bottom:18,
        left:0,
        width:'100%'
        // alignItems:'flex-end'
    }
})
export default DrawerContent;