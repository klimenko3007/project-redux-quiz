import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const Options = () => {
  const dispatch = useDispatch()
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  return (
    <div>
      {question.options.map((option) => {
        return (
          <label
            htmlFor={option}
            key={option}
            onClick={() => dispatch(quiz.actions.submitAnswer(
              {
                questionId: question.id,
                answerIndex: question.options.indexOf(option)
              }
            ))}>
            <input type="radio" name="radio" value={option} id={option} />
            {option}
          </label>
        )
      })}
    </div>
  )
}
