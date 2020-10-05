import React from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

// reducers
import Reducer from './Reducers/Reducer'

import Reminder from './Reminder'

const Store = createStore(Reducer)

export default function App() {
  return (
    <Provider store={Store}>
        <Reminder /> 
    </Provider>
  )
}
