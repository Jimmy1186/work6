import React from "react";
import StandCard from "../Cards/StandCard";
import EditionCard from "../Cards/EditionCard";
import SpecialCard from "../Cards/SpecialCard";


function AboutProject({stand,edition,special,setStand,setEdition,setSpecial}) {


  return (
    <section className="about-project">
      <h3>About this project</h3>
      <span>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </span>
      <span>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </span>
      <StandCard setStand={setStand} stand={stand}/>
      <EditionCard setEdition={setEdition} edition={edition}/>
      <SpecialCard setSpecial={setSpecial} special={special}/>
    </section>
  );
}

export default AboutProject;
