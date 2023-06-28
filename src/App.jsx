import { useState } from "react";
import "./App.css";
import CharacterSelect from "./CharacterSelect";
import Character from "./Character";


const characters = [
  {id: 1, name: "Ryu", },
  {id: 2, name: "Chun_Li"}
]

function App() {
  return (
    <>
      <h1>hello</h1>
      {/* <CharacterSelect /> */}
      <Character characters={characters}/>
    </>
  );
}

export default App;
