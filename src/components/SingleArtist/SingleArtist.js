import React from 'react';
import {Link} from "react-router-dom";
import './SingleArtist.css';

const SingleArtist = props => {
    return (
        <div className="singleArtist">
            <img src={props.src} className="artistImg" alt="artist"/>
            <Link className="artistName" to={'/artist/' + props.id}>{props.name}</Link>
        </div>
    );
};

export default SingleArtist;