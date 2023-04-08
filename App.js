import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from "./db_1.json"

export default  class App extends Component {
  constructor(){
    super()
    this.state = {
      text:"",
      displayText: "",
      chunks: []
    }
  }
  render(){
    return(
     <SafeAreaProvider>
        <View style = {styles.container}>
          <Header 
            backgroundColor ="#9C8210"
            centerComponent={{
              text: "Macaquinho Fofo",
              style: {color: "#fff", fontSize: 20}
            }}
          />
          <Image 
           source={require("./assets/macaquinho.jpg")}
           style = {styles.imageIcon}/>

          <TextInput
            style = {styles.inputBox}
            onChangeText={(text)=>{this.setState({text: text})}}
            value={this.state.text}
          />
          <TouchableOpacity style = {styles.goButton}
           onPress={()=>{this.setState({chunks: db[this.state.text].chunks})}}>
            <Text style = {styles.buttonText}>IR</Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map((item)=>{
              return(
               <TouchableOpacity style = {styles.chunkButton}>
                <Text style = {styles.displayText}>{item}</Text>
               </TouchableOpacity>
              )
            })}
          </View>
          
        </View>
 </SafeAreaProvider>
    
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8b8b8',
    },
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      
    },
    goButton: {
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    displayText: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
    },
    imageIcon: {
      width: 150,
      height: 150,
      alignSelf: "center",
    },
    chunkButton: {
      width: '60%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      margin: 5,
      backgroundColor: 'red',
    },
  });