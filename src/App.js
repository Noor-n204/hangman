import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Solution from './Components/Solution';
import Score from './Components/Score';
import Letters from './Components/Letters'
import EndGame from './Components/EndGame';

function App() {
  let solOBG ={word:"BYTES", hint:"Your ideal mood when coding"}

  let [solution, setSolution] = useState(solOBG)
  let [letterStatus, setLetterStatus] = useState(generateLetterStatuses())
  let [score, setScore] = useState(80)
  let [endGame, setEndGame] = useState(false)

  function getScoreClass(currentScore){
    if(currentScore >= 80){
      return "high-score"
    }
    if(currentScore <80 && score>50){
      return "middle-score"
    }
    else{
      return "low-score"
    }
  }

  function generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  function selectLetter(letter, currentScore){
    if([...solution.word].find(sol=> sol===letter) && !letterStatus[letter]){
      currentScore+=5
      setScore(currentScore)
    }
    else if(![...solution.word].find(sol=> sol===letter) && !letterStatus[letter] && score>0){
      currentScore-=20
      setScore(currentScore)
    }

    let letters ={...letterStatus}
    letters[letter]=true
    setLetterStatus(letters)

    if([...solution.word].every(sol => letters[sol])){
      setEndGame(`Congratulations you finished the game with score ${score}`)
    }
    else if(currentScore<=0){
      setEndGame(`hard luck,the word is ${solution.word}`)
    }
  }

  return (
    <div>
      {!endGame? <div><Score score={score} classScore={getScoreClass}/>
                    <Solution solution = {[... solution.word]} hint = {solution.hint} letterStatus ={letterStatus} selectLetter={selectLetter}/>
                    <Letters letterStatus ={letterStatus} selectLetter={selectLetter} score={score}/>
      </div>:
      <EndGame sentence ={endGame} />}
      </div>
  );
}

export default App;
