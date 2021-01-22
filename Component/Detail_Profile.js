import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import Dangnhap from './Dangnhap';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Profile from './Profile';
const Detail_profile = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.left}>
                    <Text style={styles.top_description}>
                        Nam
                </Text>
                    <Text style={styles.description}  onPress={()=>{props.navigation.navigate('Profile')}}>
                        Chạm để xem thông tin
                </Text>
                </View>
                <View style={styles.right}>
                    <Image style={styles.tinyLogo}
                        source={{ uri: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/83040435_175874177153572_7388585565899194368_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=CzyMQ9oPIVEAX9aEnEE&_nc_ht=scontent.fhan3-1.fna&oh=674b15ff9b646250e21d1b40829798db&oe=602C2A05' }} />
                </View>
            </View>
            <View >
                    <TouchableOpacity>
                        <Text onPress={()=>{props.navigation.navigate('Dangnhap')}} style={styles.button}>Đăng Xuất</Text>
                    </TouchableOpacity>
            </View>
        </View>


    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginVertical: 35,

        backgroundColor: '#FFFFFF',
        padding: 30,
        elevation: 1

    },
    left: {
        textAlign: 'auto'
    },
    top_description: {
        color: '#444444',
        fontWeight: 'bold',
        fontSize: 24
    },
    description: {
        color: '#666666'
    },
    right: {
        marginVertical: 14
    },
    tinyLogo: {
        width: 68,
        height: 68,
        borderRadius: 31,
        position: "absolute",
        top: -30,
        left: 150

    },
    button:{
        
        backgroundColor:'#FFFFFF',
        marginTop:20,
        color:'red',
        // justifyContent:'center',
        // alignItems:'center',
        textAlign:'center',
        height:50,
        paddingVertical:13,
        color:'#C3333C',
        fontWeight:'bold',
        fontSize:14
    }
})
export default Detail_profile;