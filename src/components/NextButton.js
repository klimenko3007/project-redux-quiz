import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const NextButton = () => {
  const answersArray = useSelector((state) => state.quiz.answers)
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const hasAnswered = () => {
    if (answersArray.length === question.id) {
      return true
    } return false
  }

  const dispatch = useDispatch()
  return (
    <div className="buttons-wrapper">
      <button className="next-btn" disabled={!hasAnswered()} type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next Question</button>
    </div>
  )
}