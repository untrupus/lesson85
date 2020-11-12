import {
    FETCH_ARTISTS_ERROR,
    FETCH_ARTISTS_SUCCESS,
    FETCH_ARTIST_SUCCESS,
    FETCH_ARTIST_ERROR,
    FETCH_TRACKS_ERROR,
    FETCH_TRACKS_SUCCESS
} from "./actionTypes";

const initialState = {
    artists: [],
    albums: [],
    tracks: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTISTS_SUCCESS: {
            return {...state, artists: action.value};
        }
        case FETCH_ARTISTS_ERROR:
            return {...state, error: action.error};
        case FETCH_ARTIST_SUCCESS: {
            return {...state, albums: action.value};
        }
        case FETCH_ARTIST_ERROR:
            return {...state, error: action.error};
        case FETCH_TRACKS_SUCCESS: {
            return {...state, tracks: action.value};
        }
        case FETCH_TRACKS_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default reducer;