import React,{useState} from 'react';
import {

  StyleSheet,
  View,
  Text,
  FlatList,
  Button,ScrollView,
  TextInput,TouchableOpacity,CheckBox
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Success from './Success';
import Submit from './Submit';
const Todolist= (props)=>{
    const color = props.color;
    const size = props.size;
    const todos = props.todos;
    const handleTodosChange = props.handleTodosChange;
    const submithander = props.submithander;

    const [text, setText] = useState('');
    const changehander = (val) => {
        setText(val)
    }
    // const navigation = useNavigation(); 

    return(
      <ScrollView>
        <View style={styles.todo}>
        <View style={styles.content}>

        <View style={{flexDirection:'row'}}>
              <TextInput style={styles.input2} 
                  
                  blurOnSubmit
                   autoCapitalize="none"
                 autoCorrect={false}
                 onChangeText={changehander}
                 placeholder='Enter to do'
             />
               <TouchableOpacity>
                 <Text style={styles.buttonad} onPress={()=>submithander(text)}>Done</Text>
             </TouchableOpacity>
             
        </View>
            
        </View>
        <View style={styles.list}>   
       
        <Text style={styles.text1}>Todo List</Text> 
     
          <FlatList
          data={todos}
          renderItem={({item,index}) =>(
              <View style={styles.listtd}>

                   <TouchableOpacity
                    style={{flexDirection:'row'}}
                    onPress={() => {
                    handleTodosChange(item);
                            }}
                        >
                            {
                                !item.isChecked && (
                                    <FontAwesome name={"square-o"} size={25} style={styles.check} />
                                ) || (
                                    <FontAwesome name={"check-square"} size={25} />
                                )
                            }
                           <Text style={styles.tittle}>{item.text}</Text>
                        </TouchableOpacity>
          
                </View>
          )             
          }
          />
            
         </View>
         <View style={styles.list}>
         <Text style={styles.text1}>Result</Text>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (

                            item.isChecked && (
                                <Text style={{ color: color, fontSize: size ,marginLeft:10,color:'#000000'}}>{item.text}</Text>
                            )


                        )}
                    />
          </View>
          {/* <Submit/> */}
         </View>
         </ScrollView>
        );
};
const styles =StyleSheet.create({
  
  text1:{
  //  fontFamily:'Roboto',
    fontSize:'normal',
    fontWeight:'normal',
    fontSize:16,
    lineHeight:19 ,
    backgroundColor: '#BD1313',
    //borderRadius: 3,
    height:44,
    color:'#FFFFFF',
    paddingHorizontal:6,
    paddingVertical:15,
    marginLeft:9,
    marginRight:9,
    borderTopRightRadius:8,
    borderTopLeftRadius:8,
    marginBottom:20
    
  },
  list:{
        marginTop:30,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation:8,
      //  backgroundColor: '#FFFFFF',
        borderRadius: 10,
        height:160
      },
      tittle:{
        color:'#000000',
        fontWeight:'bold',
       // marginLeft:9,
        fontSize:16,
        fontWeight: 'normal',
        lineHeight:20
      
      },
      listtd:{
        flexDirection:'row',
        marginHorizontal:13
      
      }, input2:{
        height: 40, borderColor: 'gray', borderWidth: 1 ,
        width:270,
        marginLeft:16,
        marginRight:20,backgroundColor:'#FFFFFF',marginTop:20,borderRadius:5
      },
      buttonad:{
        width:94,height:42,color:'#fff',backgroundColor:'#BD2B26',textAlign:'center',paddingTop:8,
        fontWeight:'400',marginTop:20,color:'#FFFFFF',borderRadius:9
      },
      check:{
          marginLeft:10
      }
})
export default Todolist;