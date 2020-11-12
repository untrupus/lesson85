import React from 'react';
import './SingleAlbum.css';

const SingleAlbum = props => {
    return (
        <div className="singleAlbum">
            <img src={props.src} className="albumImg" alt="album"/>
            <p>{props.name}</p>
            <p>{props.year}</p>
        </div>
    );
};

export default SingleAlbum;