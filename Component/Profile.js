import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity, Image
} from 'react-native';
import Detail_Profile from './Detail_Profile';
const Profile = (props) => {

    return (

        <View style={styles.container}>
            <View style={styles.pro}>
                <Image style={styles.tinyLogo}
                    source={{ uri: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/83040435_175874177153572_7388585565899194368_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=CzyMQ9oPIVEAX9aEnEE&_nc_ht=scontent.fhan3-1.fna&oh=674b15ff9b646250e21d1b40829798db&oe=602C2A05' }} />
            </View>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 18,lineHeight:27 }}>Nguyễn Phương Nam</Text>
                <Text  style={{ color: '#3784FF', fontSize: 12, fontWeight: 'bold',lineHeight:18 }}>Thay đổi ảnh đại diện</Text>
            </View>
            <View style={styles.header_profile}>
                <View style={styles.profile}>
                    <Text style={styles.text_one}>Số điện thoại</Text>
                    <Text style={styles.text_true}>0973712797</Text>
                </View>
                <View style={styles.profile}>
                    <Text style={styles.text_one}>Ngày sinh</Text>
                    <Text style={styles.text_true}>06/01/2000</Text>
                </View>
                <View style={styles. profile}>
                    <Text style={styles.text_one}>Số điện thoại</Text>
                    <Text style={styles.text_true}>0973712797</Text>
                </View>
                <View style={styles. profile}>
                    <Text style={styles.text_one}>Email</Text>
                    <Text style={styles.text_true}>Nguyễn Phương Nam</Text>
                </View>
                <View style={styles. profile}>
                    <Text style={styles.text_one}>Địa chỉ </Text>
                    <Text style={styles.text_true1}>Phú Nghĩa ,Phú Kim, Thạch Thất ,Hà Nội</Text>
                </View>
            </View>
        </View>


    );

}
const styles = StyleSheet.create({
    container: {
        // backgroundColor:'green',
        // backgroundColor:'green',
        // flex:1,
        backgroundColor: '#FFFFFF',
        elevation: 9,
        height: 410,
        marginHorizontal: 18, marginTop: 60,
        borderRadius:9
        // flex:1
    },
    tinyLogo: {
        width: 68,
        height: 68,
        borderRadius: 31,
        position: "absolute",
        top: -30,
        left: 150

    },
    header: {
        marginVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    header_profile:{
        marginVertical:1,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        //borderBottomWidth: 1,
        paddingVertical: 15,
        borderTopColor: '#E4E4E4',
        borderBottomColor: '#E4E4E4'
    },
    text_one: {
        paddingHorizontal: 15,
        color: '#888888',
        fontWeight: 'normal'
    },
    text_true: {
        paddingHorizontal: 15,
        color: '#323232',
        fontWeight: 'bold',
        marginTop:1,
        
    },
    profile1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderTopColor: '#E4E4E4',
        borderBottomColor: '#E4E4E4'
    },
    text_true1: {
        paddingHorizontal: 62,
        color: '#323232',
        fontWeight: 'bold',
        marginTop:1,
        width:350,
        textAlign:'right'
    },

})
export default Profile;