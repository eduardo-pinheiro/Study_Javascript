import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class Home extends Component {
  
  link( router ) {
    this.props.navigation.navigate(router)
  }

  render(){
    return(
      <View style={ styles.container } >
        
        <Text>We have { this.props.screenProps.currentFriends.length } friends!</Text>
        
        <TouchableOpacity
          style={ styles.button }
          onPress={ () => this.link('Friends') } 
        > 
          <Text style={ styles.text }>Adicione um amigo</Text> 
        </TouchableOpacity>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 5,
    marginTop: 15,
    backgroundColor: 'skyblue',
  },
  text: {
    color: 'white',
    fontWeight: '600',
  }
});