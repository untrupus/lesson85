import React, {useEffect} from 'react';
import SingleArtist from "../../components/SingleArtist/SingleArtist";
import {fetchArtists} from "../../store/actions";
import {useSelector, useDispatch} from "react-redux";
import './Artists.css';

const Artists = () => {
    const artists = useSelector(state => state.artists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArtists());
    }, [dispatch]);

    const artistsList = artists.map(artist => {
        return (
            <SingleArtist
                key={artist._id}
                src={'http://localhost:8000/public/uploads/' + artist.image}
                name={artist.name}
                id={artist._id}
            />
        )
    });

    return (
        <div className="main">
            <div className="container">
                <div className="mainInner">
                    {artistsList}
                </div>
            </div>
        </div>
    );
};

export default Artists;