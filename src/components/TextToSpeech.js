import React from 'react'

const TextToSpeech = () => {
    const handleClick=()=>{
        const text= "Hello all vinandi vinandi ante vinayaka chaviti morning ante  Tommarow morning september seventh morning seven am seven minutes ku Raghu sir and all  Indian Innovation Hub students we are all begin projects . npm init --yes   This program only 15minutes";
        const value = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(value);
    }
  return (
    <div>
      <center>
      <h1>Text to speech in React Application</h1>
      <button onClick={handleClick}>speak</button>
      </center>
    </div>
    
  )
}

export default TextToSpeech
