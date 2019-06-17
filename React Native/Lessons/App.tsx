import React, { Component } from 'react'

/* View's */
  import FlexBoxLesson from './lessons/view/FlexBox' 
  import TextInputLesson from './lessons/view/TextInput' 
  import TouchablesLesson from './lessons/view/Touchables'
  import ScrollViewLesson from './lessons/view/ScrollView'
  import FlatIListLesson from './lessons/view/FlatList'
  import FlatListLesson from './lessons/view/FlatList';
  import SectionListLesson from './lessons/view/SectionList'

/* Navigation */
  import NavigationApp from './lessons/navigation/App'

/*Redux*/
  import ReduxApp from './lessons/redux/App'

export default class App extends Component {
  render() {
    return ( <ReduxApp/> )
  }
}