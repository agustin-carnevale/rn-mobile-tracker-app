import createDataContext from './createDataContext'
import trackerApi from '../api/Tracker'

const trackReducer = (state, {type,payload})=>{
    switch(type){
        case 'fetch_tracks':
            return payload
        default:
            return state
    }
}

const fetchTracks= dispatch => async ()=>{
    const response = await trackerApi.get('/tracks')
    dispatch({type: 'fetch_tracks', payload: response.data})
}

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', {name, locations})
}

export const {Context, Provider} = createDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    []
)