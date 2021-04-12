import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const Options = () => {
  const dispatch = useDispatch()
  const [answerCorrect, setAnswerCorrect] = useState()
  const [disabled, setDisabled] = useState()
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  console.log(question)

  const checkAnswer = (index) => {
    if (index === question.correctAnswerIndex) { //check against specific option (since we are inside the .map)
      setAnswerCorrect(true)
    } else setAnswerCorrect(false)
  }
  useEffect(() => {
    setDisabled(false)
    setAnswerCorrect()
  }, [question])

  return (
    <div className="buttons-wrapper">
      {question.options.map((option, index) => {
        return (
          <button
            className={`white ${answerCorrect === undefined ? null : answerCorrect ? 'green' : 'red'}`}
            type="button"
            key={option}
            disabled={disabled}
            onClick={() => {
              setDisabled(true)
              checkAnswer(index)
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
