import React, { Component } from 'react'
import { View } from 'react-native'

export default class FlexBoxLesson extends Component {

  render() {
    
    return(
  
      <View style={{ flex: 1 }}>
          
        <View>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}/>
          <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}/>
          <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }}/>
        </View>
        
        <View style={ { flex: 1, flexDirection: 'row' } }> 
          <View style={{ flex: 1, margin: 15, backgroundColor: 'powderblue' }}/>
          <View style={{ flex: 1, margin: 15, backgroundColor: 'skyblue' }}/>
          <View style={{ flex: 1, margin: 15, backgroundColor: 'steelblue' }}/>
        </View>
        
        <View style={ { justifyContent: 'flex-end'} }> 
          <View style={{ backgroundColor: 'steelblue', height: 70 }}/>
        </View>
        
      </View>
      
    )
  }
}