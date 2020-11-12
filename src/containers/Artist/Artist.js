import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchArtist} from "../../store/actions";
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum";
import './Artist.css';

const Artist = props => {
    const albums = useSelector(state => state.albums);
    const artist = useSelector(state => state.artist);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArtist(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const albumList = albums.map(album => {
        return (
            <SingleAlbum
                key={album._id}
                name={album.name}
                year={album.year}
                id={album._id}
                count={album.count}
                src={'http://localhost:8000/uploads/' + album.image}
            />
        )
    });

    console.log(albums);
    return (
        <div className="artist">
            <div className="container">
                <h2>{artist}</h2>
                <div className="artistInner">
                    {albumList}
                </div>
            </div>
        </div>
    );
};

export default Artist;