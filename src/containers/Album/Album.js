import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTracks} from "../../store/actions";
import './Album.css';

const Album = props => {
    const tracks = useSelector(state => state.tracks);
    const artist = useSelector(state => state.artist);
    const album = useSelector(state => state.album);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTracks(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const trackList = tracks.map(track => {
        return (
            <p key={track._id}>
                <span className="number">{track.number} </span>
                {track.name}
                <span className="duration"> {track.duration}</span></p>
        )
    });

    return (
        <div className="album">
            <div className="container">
                <h4>{artist}</h4>
                <p>{album}</p>
                {trackList}
            </div>
        </div>
    );
};

export default Album;