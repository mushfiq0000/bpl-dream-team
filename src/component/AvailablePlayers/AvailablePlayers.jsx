import React, { use } from "react";

import userImg from "../../assets/image/user-1.png"
import flagImg from "../../assets/image/report-1.png"

const AvailablePlayers = ({ palyersPromise }) => {
  const playerData = use(palyersPromise);
  console.log(playerData);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-5 mb-5">

        {
            playerData.map(player => <div className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img
            className="w-full h-70 object-cover"
            src={player.player_image}
            alt="Shoes"
          />
        </figure>
        <div className="mt-4">
          <h2 className="card-title"><img src={userImg} alt="" />{player.player_name}</h2>
          <div className="flex justify-between items-center border-b-1 border-gray-300 pb-4 mt-2">

            <h4 className="flex items-center gap-2 mt-4 text-gray-500"><img src={flagImg} alt="" />{player.player_country}</h4>

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
                <p className="font-semibold">Price: <span>{player.price}</span> </p>
                <button className="btn text-gray-500">Choose Player</button>
            </div>

        </div>
      </div>)
        }


    </div>
  );
};

export default AvailablePlayers;
