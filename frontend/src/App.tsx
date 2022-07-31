import PlayerList from "./components/PlayerList";
import { useEffect, useState } from "react";
import PlayerForm from "./components/PlayerForm";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, [players]);

  const fetchPlayers = async () => {
    const SOCCER_API = `http://localhost:4000/players`;
    let response = await fetch(SOCCER_API);
    let result = await response.json();
    setPlayers(result);
  };

  return (
    <div className="container vh-100">
      <div className="row d-flex vh-100">
        <div className="column bg-light d-flex justify-content-start align-items-center flex-wrap">
          <PlayerList players={players} />
        </div>
        <div className="column d-flex justify-content-center align-items-center">
          <PlayerForm />
        </div>
      </div>
    </div>
  );
}

export default App;
