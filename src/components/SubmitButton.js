import React from 'react'
import { useSelector } from 'react-redux'

export const SubmitButton = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const answers = useSelector((store) => store.quiz.answers)
  const checkAnswer = () => {
    //console.log(question)
    console.log(answers[0].isCorrect)
  }

  return (
    <div>
      <button type="button" onClick={checkAnswer}>Check answer</button>
    </div>
  )
}
