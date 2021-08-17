import React from "react";
import titleImg from "./../../images/logo-mastercraft.svg";
import { useState } from "react";
import Overlay from "./Overlay";

function TitleBlock({stand,edition,special,setStand,setEdition,setSpecial,display, setDisplay}) {


  return (
    <>
      <section className="title-block">
        <img className="title-img" src={titleImg} alt="" />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <span>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </span>
        <div className="btn-mark">
          <button onClick={() => setDisplay(!display)}>
            Back this project
          </button>
          <div className="bookmark">
            <div className="bookmark-btn"></div>
            <span className="bookmark-span">Bookmark</span>
          </div>
        </div>
      </section>
      {display ? <Overlay setDisplay={setDisplay} display={display}  setStand={setStand} stand={stand}  setEdition={setEdition} edition={edition}  setSpecial={setSpecial} special={special}/> : ""}
    </>
  );
}

export default TitleBlock;
