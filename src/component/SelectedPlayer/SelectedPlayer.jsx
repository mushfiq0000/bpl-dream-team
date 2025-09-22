import React from 'react';

import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayer = ({purchasedPlayers, removePlayer}) => {

    return (
        <div className='max-w-[1200px] mx-auto mt-4'>
            {
                purchasedPlayers.map(player => <SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayer;