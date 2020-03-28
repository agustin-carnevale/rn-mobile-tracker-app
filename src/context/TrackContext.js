import createDataContext from './createDataContext'
import trackerApi from '../api/Tracker'

const trackReducer = (state, {type,payload})=>{
    switch(type){
        default:
            return state
    }
}

const fetchTracks= dispatch => ()=>{
    dispatch({type: 'fetch_tracks'})
}

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', {name, locations})
}

export const {Context, Provider} = createDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    []
)