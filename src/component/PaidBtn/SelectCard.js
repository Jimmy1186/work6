import React from 'react'
import {NumContext} from './../../App'
import {useContext} from 'react'


function SelectCard({productnum}) {
 
  const {displayValue} = useContext(NumContext)
  let [display, setDisplay] = displayValue


    return (
        <div className="card-title">
        <div className="left">
          <p>{productnum}</p>
          <span>left</span>
        </div>
        <button onClick={() => setDisplay(!display)}>Select Reward</button>
      </div>
    )
}

export default SelectCard
