import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (
    <LinearGradient colors={['#63CAC6', '#1E61B0']} style={styles.container}>
      <FontAwesome5 
        style={styles.userIcon}
        solid
        name='user-circle' 
        size={130} 
        color='white'
      />
      <View style={styles.input}>
        <FontAwesome5 
          name='user' 
          size={20} 
          color='#008BB2'
        />
        <Text style={styles.inputText}>Username</Text>
      </View>
      <View style={styles.input}>
        <FontAwesome5 
          name='lock' 
          size={20} 
          color='#008BB2'
        />
        <Text style={styles.inputText}>Password</Text>
      </View>
      
      <View style={styles.inputLogin}>
        <Text style={styles.inputTextLogin}>Login Now</Text>
      </View>

      <View style= {styles.extraInput}>
  
        <Text style= {styles.extraText1}>     
        <FontAwesome5 
          name='check-square' 
          size={13} 
          color='#fff'
        /> Remember me </Text>  
        <Text style= {styles.extraText2}>Forgot password?</Text>  
      </View>
      
      <View style= {styles.endPage}>
        <Text style= {styles.member}> Not a Member? </Text>
        <View style={styles.inputSmall}> 
          <Text style={styles.member}> Create Account </Text> 
        </View>
      </View>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: '25px'
  },
  userIcon: {
    marginTop: 80,
    marginBottom: 15,
  },
  text: {
    marginBottom: 50,
    color: 'red',
    fontSize: 20
    
  },
  inputText: {
    fontSize:19,
    color:'#008BB2',
    fontStyle: undefined,
    fontWeight:'bold',
    marginLeft:'50px'
  },
  input: {
    backgroundColor: '#40F2FC',
    borderRadius: 100,
    width: 250,
    height:50,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '25px',
    fontWeight :'bold',
  },
  inputLogin: {
    borderRadius: 100,
    width: 250,
    height:50,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '25px',
    fontWeight :'bold',
    backgroundColor: '#f8b4a8',
  },
  inputTextLogin: {
    color:'white',
    fontSize:19,
    fontStyle: undefined,
    fontWeight:'bold',
    marginLeft:'50px'
  },
  extraInput: {
    display:'flex',
    flexDirection:'row',
    gap: '35px'
  },
  extraText1: {
    fontSize:13,
    color:'white',
    fontWeight:'bold'
  },
  extraText2: {
    fontSize:13,
    color:'white',
    fontWeight:'bold',
    borderBottomColor: '#fff',
    borderBottomWidth: 2
  },
  member:{
    fontSize:11,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'1px'
  },
  inputSmall: {
    borderRadius: 100,
    width: 125,
    height:15,
    alignItems: 'center',
    display: 'flex',
    fontWeight :'bold',
    backgroundColor: 'transparent',
    outlineColor: "white",
    outlineStyle: "solid",
    outlineWidth: 2,
  },
  endPage:{
    paddingTop:'50px',
    gap:'3px'
  }

});

export default App
