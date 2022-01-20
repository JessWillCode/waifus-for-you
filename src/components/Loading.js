import React from 'react';
import Header from './Header';

export default function Loading() {
    return (
        <div>
            <div className='header'>
            <Header />            
            </div>
            <div className='heart'>
            <img src='src/assets/kisspng-teal-heart-clip-art-turquoise-5abba0ed0d59c5.2516532615222458690547.png' />
            </div>
            <div className='loading-text'>
                <h1>Loading...</h1>
            </div>
        </div>
    )
}
