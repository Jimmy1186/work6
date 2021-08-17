import React from "react";
import x from "./../../images/icon-close-modal.svg";
import StandCard from "../Cards/StandCard";
import EditionCard from "../Cards/EditionCard";
import SpecialCard from "../Cards/SpecialCard";
import Success from "../PaidBtn/Success";
import { useState, createContext } from "react";

export const SuccessContext = createContext();

function Overlay({
  setDisplay,
  display,
  stand,
  edition,
  special,
  setStand,
  setEdition,
  setSpecial,
}) {
  const [success, setSuccess] = useState(false);

  return (
    <div className="overlay">
      {success ? (
        <Success
          display={display}
          setDisplay={setDisplay}
          success={success}
          setSuccess={setSuccess}
        />
      ) : (
        <section className="alert-box">
          <img src={x} alt="" onClick={() => setDisplay(!display)} />
          <h3>Back this project</h3>
          <span>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </span>

          <SuccessContext.Provider value={{ value: [success, setSuccess] }}>
            <StandCard display={display} stand={stand} />
            <EditionCard display={display} edition={edition} />
            <SpecialCard display={display} special={special} />
          </SuccessContext.Provider>
        </section>
      )}
    </div>
  );
}

export default Overlay;
