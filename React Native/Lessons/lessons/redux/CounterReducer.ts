import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT } from './types'

const initial_state = {
  counter: 0
}

const countReducer = ( state = initial_state, action ) => {
  
  switch ( action.type ) {
    
    case INCREMENT:
      return { counter: state.counter + 1 }
    
    case DECREMENT:
      return { counter: state.counter - 1 }
    
    default:
      return state
  }
}

export default combineReducers({
  count: countReducer
})