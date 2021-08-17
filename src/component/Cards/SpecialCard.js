import React from 'react'
import SelectCard from '../PaidBtn/SelectCard'
import PaidCard from '../PaidBtn/PaidCard'

function SpecialCard({special,display,price=75}) {
    return (
        <div className="reward-block out-stock">

        <div className="card-title">
          <h3>Mahogany Special Edition</h3>
          <h3 className={display ? "info-active":"info"}>Pledge ${price} or more</h3>
          {display ? <h3 className="left-num">{special}<span> left</span></h3>:''}
        </div>


        <span>
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
          to our Backer member list. Shipping is included.
        </span>
        {display ? <PaidCard  price={price}/>:<SelectCard productnum={special}/>}


      </div>
  
    )
}

export default SpecialCard
