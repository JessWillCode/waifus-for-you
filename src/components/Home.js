import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {

    

    return (
        <div className='homeScreen'>
            <div className='title'>
                <h1>Ready for Waifus?</h1>
                <h4>Choose your Type to get Started</h4>
            </div>
            <div className='buttons'>
                <Link className='btn' to='/home/maid'>Maid</Link>
                {/* <Link to='/home/waifu' className='waifu-btn'>Waifu</Link> */}
            </div>
        </div>
    )
}
