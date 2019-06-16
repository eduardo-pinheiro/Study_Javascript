import React, { Component } from 'react'

/* View's */
  import FlexBoxLesson from './src/lessons/view/FlexBox' 
  import TextInputLesson from './src/lessons/view/TextInput' 
  import TouchablesLesson from './src/lessons/view/Touchables'
  import ScrollViewLesson from './src/lessons/view/ScrollView'
  import FlatIListLesson from './src/lessons/view/FlatList'
  import FlatListLesson from './src/lessons/view/FlatList';
  import SectionListLesson from './src/lessons/view/SectionList'

/* Navigation */
  import NavigationApp from './src/lessons/navigation/App'

export default class App extends Component {
  render() {
    return (<NavigationApp/>)
  }
}