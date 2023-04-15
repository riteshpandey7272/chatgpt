import React from 'react'

export default function Translate({dostuff, setInput, result}) {
  return (
    <div>
      <textarea className='text-area' name="" id="" cols="50" rows="10" onChange={(e) => setInput(e.target.value)}></textarea> <br />
      <button className='action-btn' onClick={dostuff}> Click here!</button>

      <h3 className='result-text'>{result.length > 0 ? result : ""}</h3>
    </div>
  )
}
