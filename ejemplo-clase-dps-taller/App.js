import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const estilos=StyleSheet.create({
  datos:{
    color:'blue',
    fontWeight:'bold',
    fontSize:'60',
  },
  rojo:{
    color:'red',
    fontWeight:'bold'
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      style={{width :150, height:150}}
      source={require('./assets/p.jpg')}
      Style={{width:500,height:500}}
      />

      <Text style={estilos.rojo}>Josue Adalberto Rodriguez Madrid</Text>
      <Text style={estilos.datos}>RM140115</Text>
      <Text style={[estilos.datos,estilos.rojo]}>Ver Anime</Text>
      <Text style={[estilos.datos]}>Javascript</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

