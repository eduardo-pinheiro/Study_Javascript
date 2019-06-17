import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import friendReducer from './FriendReducer'
import AppNavigator from './AppNavigator'

const store = createStore( friendReducer )

export default class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <AppNavigator/>
      </Provider>
    );
  }
}