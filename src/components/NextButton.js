import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const NextButton = () => {
  const dispatch = useDispatch()
  return (
    <div className="buttons-wrapper">
      <button className="next-btn" type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next Question</button>
    </div>
  )
}