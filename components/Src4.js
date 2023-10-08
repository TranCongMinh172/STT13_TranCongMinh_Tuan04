import { StatusBar } from 'expo-status-bar';
import {   StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    CheckBox,
    TouchableOpacity, Image } from 'react-native';
import react,{useState} from 'react';
import Modal from "react-native-modal";



export default function Src4() {
  const COST_DEFAULT =   141800;
  const [count, setCount] = useState(1);
  const [cost, setCost] = useState(COST_DEFAULT);
  const minus = () => {
      if (count > 0) {
          setCount(count - 1);
          setCost(cost - COST_DEFAULT); 
      }
  }
  const plus = () => {
      setCount(count + 1);
      setCost(cost + COST_DEFAULT);
  }

  return (
    <View style = {styles.container}>
        <View style= {{backgroundColor:"white"}} >
            <View style ={styles.top}>
                <Image
                    source={require("../assets/book.png")}
                    style = {styles.img}
                ></Image>
                <View >
                    <Text  style ={styles.title}
                    >Nguyên hàm tích phân và ứng dụng</Text>
                    <Text style ={styles.title}
                    >Cung cấp bởi Tiki Trading</Text>
                    <Text style ={styles.title1}
                    >{COST_DEFAULT.toLocaleString('vi-VN')} đ</Text>
                    <Text style ={styles.title2}
                    >141.000 đ</Text>
                    <View style={styles.btnTop}>
                        <TouchableOpacity style={styles.btnTangGiam} onPress={minus} >
                            <Text>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.txtBtn}
                        >{count}</Text>
                        <TouchableOpacity style={styles.btnTangGiam}  onPress={plus} >
                            <Text>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnMuaSau} >
                            <Text style={styles.txtMuaSau}
                            >Mua sau</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
            </View>
             <View style = {styles.top1}>
                    <Text style={styles.txtdl}>Mã giảm giá đã lưu</Text>
                    <TouchableOpacity>
                        <Text style={styles.txtMuaSau} >Xem tại đây</Text>
                    </TouchableOpacity>
            </View>
            <View style ={styles.top2}>
                <TouchableOpacity style={styles.btnMGG} >
                    <Modal
                        transparent={false}
                       animationType="slide" 
                    >    
                    </Modal>
                    <Text style={styles.txtMGG}
                    >Mã giảm giá</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAD} >
                    <Text style={styles.txtAD}
                    >Áp dụng</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.content}>
            <Text style={styles.txtcontent}>Bạn có phiếu tặng quà Tiki/Got it/Urbox?</Text>
            <TouchableOpacity style={styles.btnNTD} >
                    <Text style={styles.txtNhaptaiDay}
                    >Nhập tại đây?</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.content1}>
            <Text style={styles.txtTT} >Tạm tính</Text>
            <Text style={styles.txtDo} >{cost.toLocaleString('vi-VN')}</Text>
        </View>
        <View style={styles.bottom}>
            <View style={styles.content3}>
                <Text style={styles.txtTT} >Thành tiền</Text>
                <Text style={styles.txtDo} >{cost.toLocaleString('vi-VN')}</Text>
            </View>

            <TouchableOpacity style={styles.btnDatHang} >
                    <Text style={styles.txtAD}
                    >Tiến hành đặt hàng</Text>
                </TouchableOpacity>
        </View>
    </View>
   


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
  },
  top:{
    flexDirection:"row",
    marginTop:20,
    justifyContent:"space-evenly",
    backgroundColor:"white"
  },
  img:{
    width:110,
    height:150,

  },  
  title:{
    fontWeight:700,
    margin:3
  },
  title1:{
    fontWeight:600,
    margin:3,
    fontSize:25,
    color:"#EE0D0D"
  },
  title2:{
    fontWeight:600,
    margin:3,
    fontSize:18,
    color:"#808080",
    textDecorationLine:'line-through'
  },
  btnTop:{
    flexDirection:"row",
    margin:10
  },
  btnTangGiam:{
    width:20,
    height:20,
    backgroundColor:"#808080",
    alignItems:"center"
  }, txtBtn:{
    fontSize:18,
    fontWeight:600,
    marginLeft:10,
    marginRight:10
  },
  btnMuaSau:{
    marginLeft:100
  },
  txtMuaSau:{
    fontSize:15,
    color:"#134FEC",
   
  },
  txtdl:{
    fontWeight:600
  },
  top1:{
    flexDirection:"row",
    marginTop:10,
    justifyContent:"space-evenly",
    marginRight:140,
    backgroundColor:"white"
  },
  top2:{
    flexDirection:"row",
    marginTop:40,
    justifyContent:"space-between",
    backgroundColor:"white",
    height:70
  },
  txtMGG:{
    fontSize:20,
    fontWeight: 600
  },
  btnMGG:{
    borderWidth:1,
    width:240,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:10,
    backgroundColor:"white"
  },
  btnAD:{
    borderWidth:1,
    width:100,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginRight:10,
    backgroundColor:"#134FEC"
  },
  txtAD:{
    fontSize:20,
    fontWeight: 600,
    color:"#fff"
  },
  content:{
    flexDirection:"row",
    marginTop:20,
    width:"100%",
    backgroundColor:"white",
    height:60,
    alignItems:"center",
    justifyContent:"space-around"
  },
    title1:{
    fontWeight:600,
    margin:3,
    fontSize:25,
    color:"#EE0D0D"
  },
  txtcontent:{
    fontWeight:600,
    marginLeft:10,
    fontSize:13
  },
  txtNhaptaiDay:{
    fontSize:15,
    color:"#134FEC",
    
  },
  btnNTD:{
    marginRight:30
  },
  content1:{
    flexDirection:"row",
    marginTop:20,
    width:"100%",
    backgroundColor:"white",
    height:60,
    alignItems:"center",
    justifyContent:"space-between"
  },
  txtTT:{
    fontSize:20,
    fontWeight: 600,
    marginLeft:20  
  },
  txtDo:{
    fontWeight:600,
    margin:3,
    fontSize:25,
    color:"#EE0D0D",
    marginRight:20
  },
  bottom:{
    backgroundColor:"white",
    height:110,
    marginTop:70,
    alignItems:"center"
  },
  content3:{
    flexDirection:"row",
    width:"100%",
    alignItems:"center",
    justifyContent:"space-between"
  },
  btnDatHang:{
    borderWidth:1,
    width:360,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:10,
    backgroundColor:"red",
    border:"none",
    marginTop:10
  },
});