import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const Options = () => {
  const dispatch = useDispatch()
  const [answerCorrect, setAnswerCorrect] = useState()
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  console.log(question)

  const checkAnswer = (index) => {
    if (index === question.correctAnswerIndex) { //check against specific option (since we are inside the .map)
      setAnswerCorrect(true)
    } else setAnswerCorrect(false)
  }

  return (
    <div>
      {question.options.map((option) => {
        return (
          <button
            className={`white ${answerCorrect === undefined ? null : answerCorrect ? 'green' : 'red'}`}
            type="button"
            key={option}
            //disabled={disable}
            onClick={() => {
              checkAnswer(question.options.indexOf(option))
              dispatch(quiz.actions.submitAnswer(
                {
                  questionId: question.id,
                  answerIndex: question.options.indexOf(option)
                }
              ))
            }}>
            {option}
          </button>
        )
      })}
    </div>
  )
}
