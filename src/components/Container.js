import React from 'react'
import { useSelector } from 'react-redux'

import { CurrentQuestion } from './CurrentQuestion'
import { Summary } from './Summary'

export const Container = () => {
  const quizOver = useSelector((store) => store.quiz.quizOver)
  return (
    <>
      {quizOver ? <Summary /> : <CurrentQuestion />}
    </>
  )
}