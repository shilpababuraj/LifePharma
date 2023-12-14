import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';

interface ProductItem {
  id:number;
  title:string;
  description:string;
  price:number,
  image:string

}
const product:React.FC=()=>{
const [search, setSearch] = useState('');
const [product, setProduct] = useState<ProductItem[]>([])
const [catagory1, setCatagory1] = useState<ProductItem[]>([])



useEffect(() => {
 fetch('https://fakestoreapi.com/products')
 .then((response)=>response.json())
 .then((data)=>setProduct(data))
 .catch((err)=>console.error(err))

}, [])

const handlePressProduct1=()=>
{
  fetch('https://fakestoreapi.com/products/category/electronics')
  .then((response)=>response.json())
 .then((data)=>setCatagory1(data))
 .catch((err)=>console.error(err))
}

  return (
    <View style={styles.container}>

     <View style={styles.innerContainer}>
        <Image source={require('../assets/images/drawer.png')} style={styles.icon1}/>
        <Image source={require('../assets/images/user.png')} style={styles.icon2}/>
     </View>

     <Text style={styles.text1}>Welcome ,</Text>
     <Text  style={styles.text2}>Our Fashions App</Text>
  


  <TextInput
  placeholder='Search...'
  value={search}
  onChangeText={(text)=>setSearch(text)}
  style={styles.searchbar}
  />

<FlatList 
data={product}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(
<View style={styles.card}>
<Image source={{uri:item.image}} style={styles.productImage}/>
<View style={styles.cardDetails}>
<Text style={styles.productTitle}>{item.title}</Text>
<Text style={styles.productDes}>{item.description}</Text>
<Text style={styles.productPrice}>price: {item.price}</Text>
</View>
</View>
  )}
/>

<Text style={styles.catagory}>Catagories</Text>

<View style={styles.catagoryType}>
<TouchableOpacity style={styles.catagoryBtn} onPress={handlePressProduct1}>
  <Text style={styles.catagoryText}>electronics</Text>
</TouchableOpacity >
<TouchableOpacity style={styles.catagoryBtn} >
  <Text style={styles.catagoryText}>jewelery</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.catagoryBtn} >
  <Text style={styles.catagoryText}>men's clothing</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.catagoryBtn} >
  <Text style={styles.catagoryText}>women's clothing</Text>
</TouchableOpacity>
</View>

<FlatList 
data={catagory1}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(
<View style={styles.card}>
<Image source={{uri:item.image}} style={styles.productImage}/>
<View style={styles.cardDetails}>
<Text style={styles.productTitle}>{item.title}</Text>
<Text style={styles.productDes}>{item.description}</Text>
<Text style={styles.productPrice}>price: {item.price}</Text>
</View>
</View>
  )}
/>



<View style={styles.footer}>
  <TouchableOpacity>
  <Image source={require('../assets/images/home.png')} style={styles.icon3}/>
  </TouchableOpacity>

  <TouchableOpacity>
  <Image source={require('../assets/images/cart.png')} style={styles.icon3}/>
    </TouchableOpacity>

    <TouchableOpacity>
    <Image source={require('../assets/images/notification.png')} style={styles.icon3}/>
    </TouchableOpacity>

    <TouchableOpacity>
    <Image source={require('../assets/images/profile.png')} style={styles.icon3}/>
    </TouchableOpacity>
</View>





    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor:'#ffff'
       
      },
      innerContainer:{
        flexDirection:'row',
        paddingVertical:30,
        justifyContent:'space-between',
        alignItems:'center'
      },
      icon1:{
       width:50,
      height:50,
      resizeMode:'contain'
      },
      icon2:{
        width:50,
       height:50,
       resizeMode:'contain'
      },
      icon3:{
        width:30,
       height:30,
       resizeMode:'contain'
       },
      text1:{
        paddingHorizontal:30,
    
       fontSize:25,
       fontWeight:'bold',
       color:'black',
      },
      text2:{
        paddingHorizontal:30,
       fontSize:20,
       color:'grey',
       fontWeight:'bold'
      },
      searchbar:{
        
        paddingHorizontal:18,
        fontSize:16,
        height:40,
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:5,
        margin:20
      },
      card:{
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:8,
        overflow:'hidden',
        marginBottom:15,
        elevation:4,
        shadowColor:'#ccc',
        shadowOpacity:0.2,
        shadowRadius:4,
        textAlign:'center',
        
      },
      cardDetails:{
        width:'100%',
        padding:10,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      productImage:{
        width:200,
        height:200,
        marginBottom:10,
        resizeMode:'cover',
        borderRadius:5
      },
      productTitle:{
        color:'black',
        fontFamily:'bold',
        fontSize:18
      },
      productDes:{
        color:'grey'
      },
      productPrice:{
        color:'black',
        fontSize:18,
       
      },
      catagory:{
        fontSize:28,
        color:'black',
        fontWeight:'bold',
        padding:20
      },
      catagoryType:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:20
      },
      catagoryBtn:{
        width:'20%',
        borderRadius:5,
        height:30,
        alignItems:'center',
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#fff',
        borderWidth:1
      },
      catagoryText:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:5
      },

      footer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingVertical:10
      }
})

export default product;