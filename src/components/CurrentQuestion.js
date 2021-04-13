import React from 'react'
import { useSelector } from 'react-redux'

import { NextButton } from './NextButton'
import { Options } from './Options'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div className="question-container">
      <h1 className="question-number">Question {question.id} / 5</h1>
      {question.id === 1 && <img className="image" src="./assets/Hogwartshouse .jpeg" alt="Hogwarts" />}
      {question.id === 2 && <img className="image" src="./assets/Quidditch.jpeg" alt="Quidditch" />}
      {question.id === 3 && <img className="image" src="./assets/books.jpeg" alt="Books" />}
      {question.id === 4 && <img className="image" src="./assets/barrow.png" alt="Weasly Home" />}
      {question.id === 5 && <img className="image" src="./assets/hermiony.png" alt="Hermiony" />}

      <h2 className="question">{question.questionText}</h2>
      <Options />
      <NextButton />
      <img className="HP-emblem" src="https://img1.etsystatic.com/101/0/11982840/il_570xN.874625761_oclj.jpg" alt="Something" />
    </div>
  )
}
