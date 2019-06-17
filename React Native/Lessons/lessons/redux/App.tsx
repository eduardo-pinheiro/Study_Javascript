import React, { Component } from 'react'
import counterReducer from './CounterReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './Counter'

const store = createStore( counterReducer )

export default class App extends Component {
  render() {
    return(
      <Provider store={ store }>
        <Counter />
      </Provider>
    )
  }
}
