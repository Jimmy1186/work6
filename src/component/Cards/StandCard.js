import React from 'react'
import SelectCard from '../PaidBtn/SelectCard'
import PaidCard from '../PaidBtn/PaidCard'

function StandCard({stand,display,price=25}) {
    return (
        <div className="reward-block">
        <div className="card-title">
          <h3>Bamboo Stand</h3>
          <h3 className={display ? "info-active":"info"}>Pledge ${price} or more</h3>
          {display ? <h3 className="left-num">{stand}<span> left</span></h3>:''}
        </div>

        <span>
          You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
          you’ll be added to a special Backer member list.
        </span>
        {display ?  <PaidCard  price={price}/>:<SelectCard productnum={stand}/>}
        


      </div>

    )
}

export default StandCard
