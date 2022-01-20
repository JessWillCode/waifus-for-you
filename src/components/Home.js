import React from 'react'

export default function Home() {
    return (
        <div className='homeScreen'>
            <div className='title'>
                <h1>Ready for Waifus?</h1>
                <h4>Choose your Type to get Started</h4>
            </div>
            <div className='buttons'>
                <button className='maid'>Maid</button>
                <button className='waifu'>Waifu</button>
            </div>
        </div>
    )
}
