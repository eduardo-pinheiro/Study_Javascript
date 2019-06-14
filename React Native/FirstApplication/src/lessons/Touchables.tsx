import React, { Component } from 'react'
import { Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native'

export default class TouchablesLesson extends Component {

  _onPressButton() {
    Alert.alert("Você clicou no botão")
  }

  _onLongPressButton() {
    Alert.alert("Você segurou o botão")
  }

  render() {

    return(
      
      <View style={ styles.container }>

        <TouchableHighlight onPress={ this._onPressButton } underlayColor="white">
          <View style={ styles.button } >
            <Text style={ styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={ this._onPressButton }>
          <View style={ styles.button } >
            <Text style={ styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={ this._onPressButton }>
          <View style={ styles.button } >
            <Text style={ styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity onLongPress={ this._onLongPressButton }>
          <View style={ styles.button } >
            <Text style={ styles.buttonText } >onLongPress</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },

  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },

  buttonText: {
    padding: 20,
    color: 'white'
  }
})