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
    <div className="summary-container">
      <h1 className="summary-header">Your score is {counter}/5</h1>
      {counter >= 4 && (
        <div>
          <h2>You are a huge fan! You will get a letter from Hogwarts Soon!</h2>
          <img className="image" src="./assets/harry-potter-fans.jpeg" alt="Fans" />
        </div>)}
      {counter === 3 && (
        <div>
          <h2>Almost there! You just need to read a bit more!</h2>
          <img className="image" src="./assets/nedladdning.jpeg" alt="Books" />
        </div>)}
      {counter < 3 && (
        <div>
          <h2>Ooh nooo, you dont like Harry Potter? Why?</h2>
          <img className="image" src="./assets/hate1.jpeg" alt="Hogwarts" />
        </div>)}
      <Answers />
      <RestartButton />
    </div>
  )
}