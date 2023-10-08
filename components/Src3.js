import { StatusBar } from 'expo-status-bar';
import {   StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    CheckBox,
    TouchableOpacity, } from 'react-native';
import react,{useState} from 'react';
import { useTheme } from 'styled-components';




export default function Src3() {
  var [password, setPassword] = useState('')
  var [passwordLength, setPasswordLength] = useState('')
  var [cbILCL, setCbILCL] = useState('')
  var [cbIUL, setCbIUL] = useState('')
  var [cbIN, setCbIN] = useState('')
  var [cbISS, setCbISS] = useState('')

  var  passwordOptions = (length,lower,upcase,number,special)=>{
    var charset = [];
    
    if(lower){
      charset.push("abcdefghijklmnopqrstuvwxyz")
    }
    if(upcase){
      charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    if(number){
      charset.push("0123456789")
    }
    if(special){
      charset.push("!@#$%^&*()")
    }
    var charsetString = charset.join("")
    var password = ""
    for(let i =0; i<length; i++){
      var randomIndex = Math.floor(Math.random()* charsetString.length)
      password += charsetString[randomIndex];
    }
    return password
  }

  var generatePassword = ()=>{
      var newPass = passwordOptions(
        passwordLength,
        cbILCL,
        cbIUL,
        cbIN,
        cbISS
      )
      setPassword(newPass)
  }



  return (
    <View style ={styles.container}>
        <View style ={styles.container1}>
        <View style = {styles.top} >
            <Text style = {styles.txtTop}>
                PASSWORD <br/>
                GENERATOR
            </Text>
            <TextInput style = {styles.inputTop} value={password} >
            </TextInput>
        </View>
        <View style = {styles.content}>
            <View style={styles.inputContent}>
                <Text style={styles.txt1} >
                    Password length
                </Text>
                <TextInput  style={styles.input1} onChangeText={setPasswordLength}
                ></TextInput>
            </View>
            <View style={styles.inputContent1} >
                <Text style={styles.txt1}>
                    Include Lower case letters
                </Text >
                <CheckBox value={cbILCL}  onValueChange={setCbILCL} style={styles.CheckBox} 
                ></CheckBox>
            </View>
            <View style={styles.inputContent1} >
                <Text style={styles.txt1}>
                    Include upcase letters
                </Text >
                <CheckBox value={cbIUL}  onValueChange={setCbIUL} style={styles.CheckBox} 
                ></CheckBox>
            </View>
            <View style={styles.inputContent1} >
                <Text style={styles.txt1}>
                    Include number
                </Text >
                <CheckBox value={cbIN}  onValueChange={setCbIN} style={styles.CheckBox}
                ></CheckBox>
            </View>
            <View style={styles.inputContent1} >
                <Text style={styles.txt1}>
                    Include special symbol
                </Text >
                <CheckBox value={cbISS} onValueChange={setCbISS}  style={styles.CheckBox}
                ></CheckBox>
            </View>
        </View>
        <View style ={styles.bottom}>
            <TouchableOpacity style ={styles.btn}
              onPress={generatePassword}
            >
                <Text style={styles.txt2} >
                    GENERATE PASSWORD
                </Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>


  
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B98",
    alignItems: 'center',
    width:"100%",
    height:"100%"

  },
  container1: {
    flex: 1,
    width: "95%",
    height: "95%",
    borderRadius: 15,
    shadowRadius: 5,
    backgroundColor: "#23235B",
    margin: 15,

  },
  top:{
    flex:0.4,
    alignItems:"center",
    marginTop:30
  },
  txtTop:{
    fontSize:25,
    fontWeight:700,
    color: "#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  inputTop:{
    marginTop:60,
    backgroundColor:"white",
    width:350,
    height:60
  },
  content:{
    flex:0.5,
    marginTop:50,

    
  },
  inputContent1:{
    flexDirection:"row",

     alignItems:"center",
    justifyContent:"center",
    margin:15
  },
  inputContent:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    width:300,
    marginLeft:45
    
  },
  txt1:{
    fontSize:20,
    fontWeight:600,
    color: "#fff",
   width:250,
   alignItems:"center"
  },
  input1: {
    backgroundColor:"white",
    width:120,
    fontSize:18,
    fontWeight:600, 
    height:35,
    marginRight:20
    
  },
  CheckBox:{
    width: 30,
    height: 30,
    alignSelf: "center",
  }, 
  bottom:{
    marginTop:15,
    alignItems:"center",
    justifyContent:"center",
  },
  btn:{
    width: 300,
    backgroundColor: "#3B3B98",
    padding: 15,
    marginTop: 55,
    borderRadius: 5,
    height:70,
    alignItems:"center",
    justifyContent:"center",
  },
  txt2:{
    fontSize:20,
    fontWeight:600,
    color: "#fff",

  }
});



