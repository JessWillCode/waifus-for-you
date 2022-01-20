import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMaid } from '../actions/maidActions';

import Loading from './Loading';

const Maid = (props) => {
    const { maid, isFetching, error, dispatch } = props;

    useEffect(() => {
        dispatch(getMaid());
    }, []);

    if(error) {
        return <h2>Oopsies! We had a hiccup: {error}</h2>
    }

    if(isFetching === true) {
        return <h2>Fetching your Maid...</h2>;
    }

    const handleClick = () => {
        dispatch(getMaid());
    }

    return (
        <div>
            <div className='left'>
                <h1>Here's your Maid!</h1>
                <h2>Source: {maid.source}</h2>
                <h2>Likes:{maid.likes}</h2>
                <button onClick={handleClick}>Get New Maid</button>
                <Link to='/home'>Let's Go Back</Link>
            </div>
            <div className='right'>
                <img width='200' src={maid.url}/>
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