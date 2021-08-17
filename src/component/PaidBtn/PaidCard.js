import React from "react";
import {SuccessContext} from './../main/Overlay'
import {NumContext} from './../../App'
import {useContext} from 'react'


function PaidCard({price}) {

  const {value} = useContext(SuccessContext)
  const [success,setSuccess] = value


  const {moneyValue,peopleValue,standValue,editionValue} = useContext(NumContext)
  let [money, setMoney] = moneyValue;
  let [people, setPeople] = peopleValue;
  let [stand, setStand] = standValue;
  let [edition, setEdition] = editionValue;



const paid=()=>{
  if(price < 50 ){
    setStand(stand-=1)
  }else{
    setEdition(edition-=1)
  }

  setMoney(money+price)
  setPeople(people+=1)
  setSuccess(!success)
}



  return (

        <div className="pledge-block">
      <span>Pledge with no reward</span>
      <div className="btn-block">
        <button className="price-btn">$ {price}</button>
        <button onClick={()=>paid()}>Continue</button>
      </div>
    </div>
   
  );
}

export default PaidCard;
