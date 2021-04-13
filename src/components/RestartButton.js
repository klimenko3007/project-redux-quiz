import React from 'react'
import { useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const RestartButton = () => {
  const dispatch = useDispatch()
  const handleRestart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <div>
      <button className="next-btn" type="button" onClick={handleRestart}>Restart</button>
    </div>
  )
}
