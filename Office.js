
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import React ,{useState}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FrontSize from './Component/FrontSize';
import Color from './Component/Color';
import Todolist from './Component/Todolist';
const Office = (props) => {
  const [activeObject, setActiveObject] = useState({ id: 3, color: '#001AFF' })
const [color, setColor] = useState('#000');
const [size, setSize] = useState(0);
const [todos, setTodos] = useState([]);
  const submithander = (text) =>{
  
    setTodos((prevtext)=>{
      return [
        {text:text,key:Math.random().toString()},
        ...prevtext
      ]
    })
  }
  const handleTodosChange = (item) => {
    let cloneTodos = todos;
    let cloneItem = cloneTodos.find((todoItem) => todoItem.key == item.key)
    if (cloneItem) {
        cloneItem.isChecked = !cloneItem.isChecked;
    }
    setTodos([...cloneTodos])
}
function Submit() {
  props.navigation.navigate('Success', { color: color, size: size, todos: todos })
}
const handleChooseColor = (colorChoose) => {
  setActiveObject(colorChoose)
  setColor(colorChoose.color);
}
const handleChooseSize = (sizeChoose) => {
  setSize(sizeChoose);
}
  return (
    <>
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.header}>
           <Color handleChooseColor={handleChooseColor}
                        setActiveObject={setActiveObject}
                        activeObject={activeObject} style={styles.Acolor} />
           <FrontSize size={size} handleChooseSize={handleChooseSize} style={styles.Afrontsize}/>
           
        </View>
         <Todolist  color={color}
                    todos={todos} size={size}
                    handleTodosChange={handleTodosChange}
                    submithander={submithander}/> 
         {/* <View style={{backgroundColor:'#E5E5E5'}}> */}
         <TouchableOpacity
                        style={styles.submit1}
                        onPress={() => { Submit() }}
                    >
                        <Text style={styles.textsubmit}>SUBMIT</Text>
          </TouchableOpacity> 
         {/* //</View> */}
    </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    flex:1,
  /// height:900
  },
 header:{
   flexDirection:'row',
   justifyContent:'space-evenly', 
   flex:1
 },
 Acolor:{
   flex:1
 },
 Afrontsize:{
   flex:1,
   marginHorizontal:90
 } ,
 textsubmit: {
  fontSize: 18,
  color: 'white',
},
submit1: {
  margin: 20,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#BD2B26',
  height: 48,
  borderRadius: 24,
  marginVertical:10,
//  marginBottom:100
},
});

export default Office;
