import React, { Component } from 'react'
// Choose your lesson
import FlexBoxLesson from './src/lessons/FlexBox.tsx' 
import TextInputLesson from './src/lessons/TextInput.tsx' 

export default class App extends Component {
  render() {
    return (<TextInputLesson/>)
  }
}