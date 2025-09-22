import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./component/AvailablePlayers/AvailablePlayers";
import SelectedPlayer from "./component/SelectedPlayer/SelectedPlayer";
import Navbar from "./Navbar/Navbar";

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

function App() {

  const palyersPromise = fetchPlayers()

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers palyersPromise={palyersPromise}></AvailablePlayers>
      </Suspense>

      {/* <SelectedPlayer></SelectedPlayer> */}
    </>
  );
}

export default App;
