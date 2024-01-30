import React from 'react'
import Letter from './Letter'



export default function Solution(props) {
  let letterStatus = props.letterStatus
  

  return (
    <div>
      <div>{props.solution.map((sol) =>{
        return letterStatus[sol]===true? <Letter letter={sol}/> : <Letter letter="_ "/>})}</div>
      <div>{props.hint}</div>
    </div>
  )
}


// {props.selectLetter(sol)}