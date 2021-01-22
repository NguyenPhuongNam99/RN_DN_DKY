import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const Dangky = () => {

    return (
        <View style={{flex:1}}>
            <View style={styles.container}>

            </View>
            <View style={styles.top}>
                <Text style={styles.Header_title}>ĐĂNG KÝ</Text>
                <Text style={styles.info}>Số điện thoại</Text>
                <TextInput style={styles.input} />

                <Text style={styles.Pass}>Tên đăng nhập</Text>
                <TextInput style={styles.input} />
                <Text style={styles.Pass}>Mật khẩu</Text>
                <TextInput style={styles.input} />
                <Text style={styles.Pass}>Xác nhận mật khẩu</Text>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.Dn}>
                    <Text style={styles.Text}>Đăng Nhập</Text>
                </TouchableOpacity>

            </View>
        </View>

    );

}
const styles = StyleSheet.create({
    Header_title: { fontSize: 24, fontWeight: '900', lineHeight: 36, position: 'absolute', top: 10, left: 10 },
    container: {
        //flex:1,
        height: 200,
        backgroundColor: '#BF3437',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,

    },
    top: {
        backgroundColor: '#FFFFFF',
        // flex:1,
        position: 'absolute',
        top: 85,
        left: 20,
        textAlign: 'center',
        width: 375,
        borderRadius: 10,
        elevation: 3,
        height: 550
    },
    info: {
        paddingTop: 60, paddingLeft: 15
    },
    input: {
        height: 40,
        borderWidth:1,
        width: 311, marginLeft: 13,
        borderBottomWidth: 1,
        //backgroundColor:'#DDDDDD',
        borderBottomColor: '#DDDDDD',

    }, Pass: {
        paddingTop: 20, paddingLeft: 15
    },
    Dn: {
        backgroundColor: '#BF3437',
        // flex:1,
        marginHorizontal: 15,
        borderRadius: 4,
        height: 38,
        marginVertical: 120
    },
    Text: {
        paddingTop: 5,
        color: '#FFFFFF', textAlign: 'center'
    }

})
export default Dangky;