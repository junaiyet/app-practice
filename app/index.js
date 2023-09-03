import React, { useState } from 'react'
import { View,Text,TextInput,StyleSheet,Button,TouchableOpacity } from 'react-native'

function Home() {
  let [text,setText]= useState("")


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
      <Text style={styles.heading}>Juaniyett -- {text}</Text>
      <TextInput onChangeText={setText} style={styles.input}/>
      <TouchableOpacity style={styles.btn} >
        <Text  >Press Here</Text>
      </TouchableOpacity>
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
    padding: 5,
    backgroundColor:"red",
    textAlign:'center',
   
  }
});
