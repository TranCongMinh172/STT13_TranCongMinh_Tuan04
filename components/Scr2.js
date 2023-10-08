import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import react,{useState} from 'react';
import { Entypo } from "react-native-vector-icons";
import { AirbnbRating } from 'react-native-ratings'

export default function Scr2() {
 

  return (
    <View style ={styles.container}>
        <View style={styles.top}>
            <Image source={require("../assets/usb.png")} style ={styles.img} >
            </Image>
            <Text style = {styles.txt}>
                USB Bluetooth Music Receiver <br /> HJX-001 - Biến loa thường thành
                loa bluetooth
            </Text>
            
        </View>
        <View style = {styles.review}>
            <AirbnbRating
                     reviews={[
                        "Không hài lòng",
                        "Chưa hài lòng",
                        "Hài lòng",
                        "Rất hài lòng",
                        "Cực kỳ hài lòng",
                      ]}
                      reviewColor="#000"
                      reviewSize="20px"
                      size={40}
              
            ></AirbnbRating>
        </View>
        <View style={{flex:0.5}} >
        <TouchableOpacity>
            <View style = {styles.btnThemHinhAnh}>
                <Entypo
                    name ="camera" style ={styles.iconcamera}
                ></Entypo>
                <Text style = {[styles.txt, {fontSize: 20}]}>
                    Thêm hình ảnh
                </Text>
            </View>
        </TouchableOpacity>
        <TextInput style = {styles.input}
        multiline
        placeholderTextColor={"#C4C4C4"}
        placeholder='hãy chia sẻ những điều mà bạn biết về sản phẩm' 
    
        ></TextInput>
        <TouchableOpacity style ={styles.btngGui}  >

            <Text style={[{fontSize:20},{color:"white"}]} >Gửi</Text>
        </TouchableOpacity>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"center",
    margin:15
  },
  top:{
    flex:0.2,
    flexDirection:"row"
  },
  img:{
    width: 70,
    height: 70,
  },
  txt:{
    fontWeight: 700
  },
  review:{
    flex:0.3
  },
  iconcamera:{
    fontSize: 40,
    margin:5
  },
  btnThemHinhAnh:{
   
    width:300,
    flexDirection: "row",
    alignItems:"center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1511EB",
    justifyContent:"center"
  },
  input:{
    width:"100%",
    height:"50%",
    borderWidth:1,
    borderRadius:5,
    padding:12,
    fontSize:17,
    fontWeight:600,
    marginTop:20
  },
  btngGui:{
    width:"auto",
    height: 40,
    backgroundColor: "#0D5DB6",
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20
  }
});
