import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#323299'}} />
      <View style={{flex: 2, backgroundColor: '#000040'}} />
      <View style={{flex: 2, backgroundColor: '#323299'}} />
      <View style={{flex: 2, backgroundColor: '#000040'}} />
     
      
      
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
