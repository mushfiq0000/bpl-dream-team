import React, { use } from "react";


import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ palyersPromise, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayes}) => {
  const playerData = use(palyersPromise);
  

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 mt-4">

        {
            playerData.map(player => <PlayerCard purchasedPlayers={purchasedPlayers} setPurchasedPlayes={setPurchasedPlayes} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
        }


    </div>
  );
};

export default AvailablePlayers;
