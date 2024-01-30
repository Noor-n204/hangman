import React from 'react'

export default function Letter(props) {
  return (
      <span
        className={props.status ? "crossed" : "not-crossed"} onClick={()=> props.selectLetter(props.letter, props.score)}>
        {props.letter}</span>
  )
}
