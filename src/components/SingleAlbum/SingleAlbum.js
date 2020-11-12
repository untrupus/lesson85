import React from 'react';
import {Link} from "react-router-dom";
import './SingleAlbum.css';

const SingleAlbum = props => {
    return (
        <Link className="singleAlbum" to={'/album/' + props.id}>
            <img src={props.src} className="albumImg" alt="album"/>
            <p>{props.name}</p>
            <p>{props.year} ({props.count})</p>
        </Link>
    );
};

export default SingleAlbum;