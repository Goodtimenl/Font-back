import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4242/characters").then((response) => {
      setCharacters(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Harry Potter Characters</h1>
      <div className="character-list">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
