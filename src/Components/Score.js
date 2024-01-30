import React from 'react'

export default function Score(props) {
  return (
      <div className={props.classScore(props.score)}>{props.score}</div>
  )
}
