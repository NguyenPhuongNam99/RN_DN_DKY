import React,{useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity, TextInput, Alert
} from 'react-native';
import { Value } from 'react-native-reanimated';
// import {  } from 'react-native-gesture-handler';
const Dangnhap = ({navigation}) => {

    const [check,setCheck] = useState('');
    const onchange= (text)=>{
        setCheck(text);
    }
    const ch= ()=>{
        if(check.length >7 &&checkok.length >7){
            navigation.navigate('Office')
            return true;
        }
        else{
            Alert.alert('dang nhap khong thanh cong')
            return false;
        }
    }
    const [checkok,setCheckok] = useState('');
    const onchangeok= (text)=>{
        setCheckok(text);
    }
    // const chok= ()=>{
    //     if(checkok.length() > 7){
    //         navigation.navigate('Profile')
    //         return true;
    //     }
    //     else{
    //         Alert.alert('dang nhap khong thanh cong')
    //         return false;
    //     }
    // }
    return (

        <View style={{ flex: 1 }}>
            <View style={styles.container}>


            </View>
            <View style={styles.top}>

                <Text style={styles.Header_title}>ĐĂNG NHẬP</Text>
                <Text style={styles.info}>Số điện thoại</Text>
                <TextInput placeholder='textinput' textContentType='familyName'
                 returnKeyType='next' 
                 style={styles.input}
                onChangeText={(text)=>onchangeok(text)}
                 />
               
                <Text style={styles.Pass}>Mật Khẩu</Text>
                <TextInput placeholder='textinput' secureTextEntry={true} textContentType='password' 
                    returnKeyType='next' 
                    style={styles.input}
                    onChangeText={(text)=>onchange(text)
                   
                    }
                    />
                <Text style={{ color: '#3784FF', margin: 13 }}>Quên mật khẩu</Text>
                {
                    ch ?
                    <TouchableOpacity style={styles.Dn} onPress={ch}>
                    <Text style={styles.Text}>Đăng Nhập</Text>
                </TouchableOpacity>
                    :Alert.alert('that bai')
                }
                
            </View>
            <View style={styles.footer}>
                <Text>Bạn chưa có tài khoản ?</Text>
                <Text style={{ color: '#3784FF' }}>Đăng ký ngay</Text>
            </View>
        </View>

    );

}
const styles = StyleSheet.create({
    Header_title: { fontSize: 24, fontWeight: '800', lineHeight: 36, position: 'absolute', top: 20, left: 13 },
    container: {
        // flex: 1,
        height: 200,
        backgroundColor: '#BF3437',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        // position: 'absolute'

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
        elevation: 4,
        height: 300
    },
    info: {
        // paddingTop:60,
        paddingLeft: 15,
        marginTop: 65
    },
    input: {
        height: 39,
        //borderWidth: 1,
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
        height: 38
    },
    Text: {
        paddingTop: 5,
        color: '#FFFFFF', textAlign: 'center'
    },
    footer: {
        marginVertical: 620,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }, input12: {
        height: 70,
        borderWidth: 1,
        width: 311, marginLeft: 13,
        borderBottomWidth: 1,
        //backgroundColor:'#DDDDDD',
        borderBottomColor: '#DDDDDD',
    }

})
export default Dangnhap;

