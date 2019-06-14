import React, { Component } from 'react'
// Choose your lesson
import FlexBoxLesson from './src/lessons/FlexBox' 
import TextInputLesson from './src/lessons/TextInput' 
import TouchablesLesson from './src/lessons/Touchables'
import ScrollViewLesson from './src/lessons/ScrollView'
import FlatIListLesson from './src/lessons/FlatList'
import FlatListLesson from './src/lessons/FlatList';
import SectionListLesson from './src/lessons/SectionList'

export default class App extends Component {
  render() {
    return (<SectionListLesson/>)
  }
}