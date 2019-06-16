import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default class Friends extends React.Component {
  
  link( router ) {
    this.props.navigation.navigate(router)
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text>Add friends here!</Text>
        
        {
          this.props.screenProps.possibleFriends.map( ( friend, index ) => (
            <TouchableOpacity
              style={ styles.button }
              key={ friend }
              onPress={() =>
                this.props.screenProps.addFriend(index)
              }
            > 
            
              <Text style={ styles.text } >Add {friend}</Text> 
            
            </TouchableOpacity>
          ) )
        }

        <TouchableOpacity
          style={ styles.button }
          onPress={ () => this.link('Home') } 
        > 
          <Text style={ styles.text }>Volte à Home</Text> 
        </TouchableOpacity>
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