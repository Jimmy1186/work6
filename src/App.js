import "./style/style.css";
import React from "react";
import TitleBlock from "./component/main/TitleBlock";
import Statistics from "./component/main/Statistics";
import AboutProject from "./component/main/AboutProject";
import Header from "./component/header/Header";
import { useState, createContext } from "react";
export const NumContext = createContext();

function App() {
  const [money, setMoney] = useState(1000);
  const [people, setPeople] = useState(50);
  const [stand, setStand] = useState(101);
  const [edition, setEdition] = useState(64);
  const [special, setSpecial] = useState(0);

  const [display, setDisplay] = useState(false);

  return (
    <div className="App">
      <Header />

      <div className="wrapper">
        <NumContext.Provider
          value={{
            moneyValue: [money, setMoney],
            peopleValue: [people, setPeople],
            standValue: [stand, setStand],
            editionValue: [edition, setEdition],
            displayValue:[display, setDisplay] 
          }}
        >
          <TitleBlock
            setDisplay={setDisplay}
            display={display}
            setStand={setStand}
            stand={stand}
            setEdition={setEdition}
            edition={edition}
            setSpecial={setSpecial}
            special={special}
          />
          <Statistics money={money} people={people} />
          <AboutProject
            setStand={setStand}
            stand={stand}
            setEdition={setEdition}
            edition={edition}
            setSpecial={setSpecial}
            special={special}
          />
        </NumContext.Provider>
      </div>
    </div>
  );
}

export default App;
