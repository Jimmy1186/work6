import React from "react";
import check from './../../images/icon-check.svg'

function Success({setDisplay, display}) {
  return (   
  <section className="alert-box success">
        <img src={check} alt="success" />
      <h3>Thanks for your support!</h3>
      <span>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </span>
      <button onClick={() => setDisplay(!display)}>Got it!</button>
    </section>
  );
}

export default Success;
