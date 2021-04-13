import React from 'react'
import { useSelector } from 'react-redux'

export const Answers = () => {
  const answer = useSelector((state) => state.quiz.answers)
  return (
    <div className="answer-summary">
      <div className="answer-header">
        <h2>Your answer:</h2>
        <h2>Correct answer:</h2>
      </div>
      {answer.map((item) => {
        return (

          <div className="answers-wrapper" key={item.questionId}>
            <p className="your-answer">{item.answer}</p>
            <p className="correct-answer">{item.question.options[item.question.correctAnswerIndex]}</p>
          </div>
        )
      })}
    </div>
  )
}