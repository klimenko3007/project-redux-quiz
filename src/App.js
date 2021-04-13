import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'

import { Container } from './components/Container'

//TO-DO
//[X] Disable nextQuestion until answer is given, so user can't answer nothing?
// [X] Show more in the summary
// [] Progress bar
// [] CSS final touches
// [] CountDown


const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}
