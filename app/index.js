import React, { useState } from 'react'
import { View,Text,TextInput,StyleSheet,Button,TouchableOpacity,FlatList,ScrollView } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
function Home() {
  let [test,setTest]= useState("")
  let [text,setText]= useState("")
  let [edtiText,setEditText]= useState("")
  let [editID,setEditID]= useState("")
  let [error,setError]= useState([])
  let [box,setBox]= useState(false)
  let [list,setList]= useState([
  ])

  // let handleClick = ()=>{
  //   setText("MERN")
  // }
  let handleTodo = ()=>{
    if (!text) {
      setError("Please Write Something")
    }else{
      setList([...list,{task:text}])
      setText("")
    }
  }
 
  let handleChnage = (e)=>{

      setText(e.nativeEvent.text)
      setError("")
    
  }
  let handleEditChange = (e)=>{

      setEditText(e.nativeEvent.text)
      setError("")
    
  }
  let handleDelete=(item)=>{
    setTest(JSON.stringify(item))
    let arr = [...list]
    arr.splice(item,1)
    setList(arr)
  }
  let handleEdit=(item)=>{
    setBox(true)
    setEditID(item)
    let arr = [...list]
    setList(arr)
  }
  let handleTodoUpdate = (item)=>{
    let arr = [...list]
     arr[editID]= {task:edtiText}
     setList(arr)
  }
  let handleSwip=(index)=>{
    return(
 <>
    <TouchableOpacity style={styles.dltbtn} onPress={()=>handleDelete(index)}>
    <Text  style={{color:"#fff",}}>Delete</Text>
  </TouchableOpacity> 
  <TouchableOpacity style={styles.editbtn} onPress={()=>handleEdit(index)}>
    <Text  style={{color:"#fff",}}>Edit</Text>
  </TouchableOpacity> 
 </>
    );
  }

  return (
    <>
    <View style={{marginTop:50,marginLeft:20,marginRight:20,flexDirection:"row",justifyContent:"space-between"}}>
        <View >
        <Text style={{width:100,height:100,backgroundColor:"red",
      textAlign:'center',
      color:"white"}}></Text>
        </View>
        <View>
        <Text style={{width:100,height:100,backgroundColor:"blue"}}></Text>
        </View>
        <View>
        <Text style={{width:100,height:100,backgroundColor:"green"}}></Text>
        </View>
    </View>
    <View>
      <Text>{test}</Text>
      {/* <Text style={styles.heading}>- {text} -</Text> */}
      {/* <TextInput onChangeText={setText} style={styles.input}/> */}
      <TextInput onChange={handleChnage} style={styles.input} value={text}/>
      {box && 
      <>
      <TextInput  style={styles.input} onChange={handleEditChange} value={edtiText}/>
      <TouchableOpacity style={styles.editbtn} onPress={handleTodoUpdate}>
        <Text  style={{color:"#fff",}}>Update</Text>
      </TouchableOpacity> 
      </>
      }
      {/* <TouchableOpacity style={styles.btn} onPress={handleClick}>
        <Text  style={{color:"#fff",}}>Click Me.</Text>
      </TouchableOpacity> */}
      {/* <FlatList
        data={DATA}
        renderItem={({item}) => <View key={"id"}>
          <Text>{item.title}</Text>
        </View>}
        keyExtractor={item => item.id}
         /> */}
         { error &&<Text>{error}</Text>}
         <TouchableOpacity style={styles.btn} onPress={handleTodo}>
        <Text  style={{color:"#fff",}}>Click Me.</Text>
      </TouchableOpacity> 
       
     <ScrollView style={{marginBottom:300}}>
      {list.map((item,index)=>(
        <Swipeable renderRightActions={()=>handleSwip(index)}>
          <TouchableOpacity>
        <Text style={styles.list}> {index+1}.{item.task} 
            {/* <TouchableOpacity style={styles.dltbtn} onPress={()=>handleDelete(index)}>
                <Text  style={{color:"#fff",}}>Delete</Text>
            </TouchableOpacity>  */}
        </Text>
        </TouchableOpacity>
        </Swipeable>
      ))}

     </ScrollView>

    </View>
  
  
 </>
  )
}

export default Home

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 3,
    padding: 5,
  },
  heading:{
    fontSize:50,
    color:"red",
  },
  btn:{
    margin: 12,
    padding: 10,
    backgroundColor:"red",
    alignItems:'center',
    fontSize:20,
  },
  dltbtn:{
    margin: 5,
    padding: 5,
    backgroundColor:"red",
    alignItems:'center',
    fontSize:20,
    justifyContent:'flex-end',
    marginLeft:10
  },
  editbtn:{
    margin: 5,
    padding: 5,
    backgroundColor:"green",
    alignItems:'center',
    fontSize:20,
    justifyContent:'flex-end',
    marginLeft:10
  },
  list:{
    borderWidth:1,
    padding:5,
    margin:5
  }
});
