import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const Options = () => {
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState()
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  // eslint-disable-next-line max-len
  const answer = useSelector((state) => state.quiz.answers.find((a) => a.questionId === question.id))
  useEffect(() => {
    setDisabled(false)
  }, [question])

  return (
    <div className="buttons-wrapper">
      {question.options.map((option, index) => {
        return (
          <button
            className={`white ${!answer ? null
                : index === question.correctAnswerIndex
                  ? 'green'
                  : 'red'
              }`}
            type="button"
            key={option}
            disabled={disabled}
            onClick={() => {
              setDisabled(true)
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
