import React from 'react'
import { useSelector } from 'react-redux'

import { RestartButton } from './RestartButton'
import { Answers } from './Answers'

export const Summary = () => {
  const answer = useSelector((state) => state.quiz.answers)
  let counter = 0
  answer.forEach((item) => {
    if (item.isCorrect) {
      counter += 1
    }
  })
  return (
    <div className="question-container">
      <h1>Your score is: {counter}/5 questions correct</h1>
      {counter === 5 && <h2>You are a huge fan</h2>}
      {counter === 3 && <h2>Almost there</h2>}
      {counter < 3 && <h2>Ooh nooo you dont like Harry Potter? Why?</h2>}
      <Answers />

      <RestartButton />
    </div>
  )
}