
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { color } from 'react-native-reanimated';
// import LinearGradient from 'react-native-linear-gradient';
import Office from '../Office';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Screen3 = (props) => {
    const todos = props.route.params.todos;
    const size = props.route.params.size;
    const color = props.route.params.color;
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor='#BD2B26' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.textheader}>Deltail todo List</Text>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Office') }}>
                        <FontAwesome name='home' size={25} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.result}>
                <Text style={styles.textitem}>Result</Text>
                
                <View style={styles.color}>
                    <Text style={styles.textcolor}>Color:</Text>
                    <View style={{width:20,height:20,marginLeft:10,marginTop:3,backgroundColor:color}} />
                </View>
                <View style={styles.color}>
                    <Text style={styles.textcolor}>Size:</Text>
                    <Text style={[styles.textcolor,{marginLeft:10}]}>{size}</Text>
                </View>
                <View style={styles.textResult}>
                    <Text style={styles.text}>Todo List:</Text>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (

                            item.isChecked && (
                                <Text style={styles.text}>- {item.text}</Text>
                            )


                        )}
                    />
                </View>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    textcolor:{
        fontSize:18,
        marginBottom:5,
    },
    color:{
        flexDirection:'row',
        borderBottomWidth: 0.5,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
    },
    text: {
        color: 'black', 
        fontSize: 18
    },
    textResult: {
        margin: 20,
    },
    result: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
    },
    headerr: {
        height: 40,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    textitem: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
    },
    button1: {
        height: 20,
        width: 20,
        margin: 10,
    },
    icon: {
        position: 'absolute',
        left: 357,
    },
    header: {
        height: 50,
        backgroundColor: '#BD2B26',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    textheader: {
        fontSize: 20,
        lineHeight: 18.75,
        color: '#fff',
        fontWeight: '400',
    }
})
export default Screen3;