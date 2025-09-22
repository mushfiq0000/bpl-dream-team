import React, { useState } from "react";

import userImg from "../../assets/image/user-1.png";
import flagImg from "../../assets/image/report-1.png";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayes,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrtice = parseInt(
      playerData.price.split("$").join("").split(",").join("")
    );

    if (availableBalance < playerPrtice) {
      alert("Not Enough Coins");
      return;
    }

    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrtice);

    setPurchasedPlayes([...purchasedPlayers, playerData])

  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          className="w-full h-70 object-cover"
          src={player.player_image}
          alt="Shoes"
        />
      </figure>
      <div className="mt-4">
        <h2 className="card-title">
          <img src={userImg} alt="" />
          {player.player_name}
        </h2>
        <div className="flex justify-between items-center border-b-1 border-gray-300 pb-4 mt-2">
          <h4 className="flex items-center gap-2 mt-4 text-gray-500">
            <img src={flagImg} alt="" />
            {player.player_country}
          </h4>

          <button className="btn text-gray-500">{player.player_role}</button>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="font-semibold">Rating</span>
          <span className="text-gray-500">{player.rating}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="font-semibold">{player.batting_style}</span>
          <span className="text-gray-500">{player.bowling_style}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold">
            Price: <span>{player.price} USD</span>{" "}
          </p>
          <button
            disabled={isSelected}
            onClick={() => {
              handleSelected(player);
            }}
            className="btn text-gray-500"
          >
            {isSelected === true ? "Selected" : "Choose Player "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
