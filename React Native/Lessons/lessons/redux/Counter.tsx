import React,{ Component } from "react"
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { increment, decrement } from './CounterActions'

interface props {
  increment?: () => void,
  decrement?: () => void,
  count: { counter: number }
}

class Counter extends Component< props > {
  render(){

    return(

      <View style={ styles.container }>
      
        <TouchableOpacity 
          style = { styles.button }
          onPress = { () => this.props.increment() }
        >
          <Text style={ styles.text }>+</Text>
        </TouchableOpacity>
        
        <Text style={ styles.counter }>{ this.props.count.counter }</Text>
        
        <TouchableOpacity 
          style={ styles.button }
          onPress = { () => this.props.decrement() }
        >
          <Text style={ styles.text }>-</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    height: 50,
    width: 50,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },

  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 50,
  },

  counter: {
    fontSize: 50,
  }
})

const mapStateToProps = ( state ) => {
  const { count } = state
  return { count }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    increment,
    decrement,
  }, dispatch)
)

export default connect( mapStateToProps, mapDispatchToProps )( Counter )