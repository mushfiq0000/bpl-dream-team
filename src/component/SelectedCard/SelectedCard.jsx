import React from 'react';
import clearBtn from '../../assets/image/Frame.png'

const SelectedCard = ({player, removePlayer}) => {
    
    const handleRemove = () => {
        removePlayer(player)
    }

    return (
        <div className='border-1 border-gray-300 rounded-md flex justify-between items-center p-2'>
                <div className='flex items-center space-x-2'>
                    <img src={player.player_image} className='h-[60px] w[60px] object-cover rounded-md' alt="" />
                    <div>
                        <h1 className='font-semibold '>{player.player_name}</h1>
                        <p className=' text-xs text-gray-500'>{player.batting_style}</p>
                    </div>
                </div>

                <div onClick={handleRemove} className='px-3'>
                    <img src={clearBtn} alt="" />
                </div>
            </div>
    );
};

export default SelectedCard;