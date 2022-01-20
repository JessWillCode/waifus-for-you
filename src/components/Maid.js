import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Maid = (props) => {
    const { maid, isFetching, error } = props;
console.log(props);
    return (
        <div>
            <div className='left'>
                <h1>Here's your Maid!</h1>
                <h2>Source: {maid.source}</h2>
                <h2>Likes:{maid.likes}</h2>
                <button>Get New Maid</button>
                <Link to='/home'>Let's Go Back</Link>
            </div>
            <div className='right'>
                <img width='200' src={maid.img}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        maid: state.maid.maid,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Maid);