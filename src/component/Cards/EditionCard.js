import React from 'react'
import SelectCard from '../PaidBtn/SelectCard'
import PaidCard from '../PaidBtn/PaidCard'


function EditionCard({setEdition,edition,display,price=100}) {
    return (
        <div className="reward-block">

        <div className="card-title">
          <h3>Black Edition Stand</h3>
          <h3 className={display ? "info-active":"info"}>Pledge ${price} or more</h3>
          {display ? <h3 className="left-num">{edition}<span> left</span></h3>:''}
        </div>

        <span>
          You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
          member list. Shipping is included.
        </span>
        {display ? <PaidCard  price={price}/>:<SelectCard productnum={edition}/>}

      </div>

    )
}

export default EditionCard