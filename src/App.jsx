import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./component/AvailablePlayers/AvailablePlayers";
import SelectedPlayer from "./component/SelectedPlayer/SelectedPlayer";
import Navbar from "./Navbar/Navbar";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(800000);
  const [purchasedPlayers, setPurchasedPlayes] = useState([]);


  const removePlayer = (p) => {
      const filterData = purchasedPlayers.filter(ply=> ply.player_name !== p.player_name)
      console.log(filterData);
      setPurchasedPlayes(filterData)
      setAvailableBalance(availableBalance + parseInt(p.price.split("$").join("").split(",").join("")))
      
      
  }
  
  

  const palyersPromise = fetchPlayers();

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-3 ">
        <h1 className="font-bold text-2xl">{
          toggle === true ? 'Available Players' : `Selected Player (${purchasedPlayers.length}/6)`
          }</h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`p-2.5 rounded-l-xl font-semibold border-1 border-gray-300 border-r-0 ${
              toggle === true ? "bg-[#e7fe29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`p-2.5 rounded-r-xl text-gray-700 border-1 border-gray-300 border-l-0 ${
              toggle === false ? "bg-[#e7fe29]" : ""
            }`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <AvailablePlayers
            setPurchasedPlayes={setPurchasedPlayes}
            purchasedPlayers={purchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            palyersPromise={palyersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayer removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayer>
      )}
    </>
  );
}

export default App;
