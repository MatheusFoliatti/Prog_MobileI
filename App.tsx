import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default function App() {
  
  return (      
    
    
    <LinearGradient
      colors={['#63CAC6', '#1E61B0']}
      style={styles.container}>
    
    <FontAwesome5 name="user-circle" 
    size={130} 
    color={'white'} 
    solid
    style={styles.icon}
    />

    <View style={styles.label}>
     
      <FontAwesome5 name="user" 
      size={25} 
      color={'#0798cc'} 
      light
      style={styles.icon}
      />
     
      <Text
      style={styles.text} > Username </Text> 
      
      </View>
    
    </LinearGradient>
    
    
  );
}

//'#40f2fc'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  text: {
    backgroundColor: '#40f2fc',
    color: '#0798cc',
    fontSize: 20,
    borderRadius: 20,
    padding: 5,
    width: 200,
    textAlign: 'center',
    marginTop: 45,
    fontWeight: 'bold'

  },
  icon: {
    paddingTop: 100,
    position:'relative'
  },
  button:{
    paddingTop: 50,
  },
  label:{
    display: 'flex',
    flex: 1,
  }
});