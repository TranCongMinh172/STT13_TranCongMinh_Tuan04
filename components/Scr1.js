import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, TextInput } from 'react-native';
import react,{useState} from 'react';

export default function Scr1() {

  var data = [
      {
        userName : "minh",
        passWord : "12345"
      }, 
      {
        userName : "minh123",
        passWord : "12345"
      }
  ]

  var [name, setName] = useState('')
  var [pass, setPass] = useState('')

  var [result, setResult] = useState('')

  var authentication = ()=>{
    var rs = data.find((item)=>{
      if(item.userName== name && item.passWord == pass){
        return true
      }else{
         return false
      }
    })
    rs? setResult('ddang nhap thanh cong') : setResult('dang nhap that bai')
  }

  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.font}>LOGIN</Text>
        </View>
        <View style ={{marginBottom:300}}>
            <TextInput placeholder='Name' style={styles.input} onChangeText={setName} value={name} ></TextInput>
            <TextInput placeholder='Password' style={styles.input} onChangeText={setPass} value={pass} ></TextInput>
        </View>
        <View >
            <TouchableOpacity style={styles.btn} onPress={()=>{
              authentication()
            }} >
            <Text style={styles.txt}>LOGIN</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btn1}>
            <Text style={styles.txt1}>CREATE ACCOUNT</Text>
            <Text style={styles.txt1}>{result}</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex : 1,
    marginTop: 50,
    marginLeft:-150
  },
  font:{
    marginTop:50,
    textAlign:"center",
    fontSize: 50,
    fontWeight: 750,
  },
  input:{
    margin:10,
    width: 330,
    height: 54,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "rgba(242, 242, 242, 1)", 
  },
  btn:{
   
    width: 330,
    height: 54,
    marginTop: -250,
    borderWidth: 1,
    backgroundColor:"black",
    border:"none"
  },
  btn1:{
   
    width: 330,
    height: 54,
    marginTop: 30,
    borderWidth: 1,
    backgroundColor: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",

    border:"none"
  },
  txt:{
    fontWeight: 700, 
    fontSize: 25,
     color: "white",
     marginHorizontal:"auto",
     marginVertical:"auto"
  },
  txt1:{
    fontWeight: 700, 
    fontSize: 25,
     color: "black",
     marginHorizontal:"auto",
     marginVertical:"auto"
  },
  
});