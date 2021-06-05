import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import Cat from './Cat'

export default function App() {
  return (
    <View style={styles.container}>      
      <TextInput 
        style = {{height: 40}}
        placeholder = 'Enter name of the cat'/>        
      <Cat/>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{ width: 200, height: 200 }}>
      </Image>
      <StatusBar style="auto" />
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
