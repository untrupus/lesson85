import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchArtist} from "../../store/actions";
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum";
import './Artist.css';

const Artist = props => {
    const albums = useSelector(state => state.albums);
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
                src='https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg'
            />
        )
    });

    return (
        <div className="artist">
            <div className="container">
                <div className="artistInner">
                    {albumList}
                </div>
            </div>
        </div>
    );
};

export default Artist;