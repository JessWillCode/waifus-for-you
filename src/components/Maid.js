import React from 'react';
import Header from './Header';

export default function Maid() {
    return (
        <div>
            <div className='left'>
                <h1>Here's your Maid!</h1>
                <h2>Source:</h2>
                <h2>Likes:</h2>
                <button><img src='src/assets/kisspng-teal-heart-clip-art-turquoise-5abba0ed0d59c5.2516532615222458690547.png' />Get New Maid</button>
                <button><img src='src/assets/kisspng-teal-heart-clip-art-turquoise-5abba0ed0d59c5.2516532615222458690547.png' />Let's Go Back</button>
            </div>
            <div className='right'>
                <img />
            </div>
        </div>
    )
}
