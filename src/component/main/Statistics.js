import React from 'react'

function Statistics({money,people}) {
    return (
        <section className="statistics">
        <div className="stat-wrapper">
          <div className="total">
            <p className="money">${money}</p>
            <span>of $100,000 backed</span>
          </div>
          <div className="total">
            <p className="backer">{people}</p>
            <span>total backers</span>
          </div>
          <div className="total">
            <p className="day">56</p>
            <span>days left</span>
          </div>
        </div>
  
        <progress className="bar" value="32" max="100"> 32% </progress>
      </section>
    )
}

export default Statistics
