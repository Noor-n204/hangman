import React from 'react'
import Letter from './Letter'
import '../App.css'

export default function Letters(props) {
    const availableLetters = Object.keys(props.letterStatus)
  return (
    <div>
      <div>Available Letters</div>
      {availableLetters.map((letter) => {
        if(props.letterStatus[letter]){
            return <Letter selectLetter={props.selectLetter} status={true} letter={letter} score={props.score}/>
        }
      return <Letter selectLetter={props.selectLetter} status={false} letter={letter} score={props.score}/>})}
    </div>
  )
}
