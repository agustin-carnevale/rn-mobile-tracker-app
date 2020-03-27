import {AsyncStorage} from 'react-native'
import createDataContext from './createDataContext'
import trackerAPI from '../api/Tracker'
import {navigate} from '../navigationRef'


const authReducer = (state, action) =>{
    switch (action.type) {
        case 'signin':
            return {errorMessage:'', token: action.payload}
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        default:
           return state
    }
}

const tryLocalSignin = dispatch => async () =>{
    const token = await AsyncStorage.getItem('token')
    if(token) {
        dispatch({type: 'signin', payload: token})
        navigate('TrackList')
    }else{
        navigate('loginFlow')
    }
}

const clearErrorMessage = dispatch => ()=> dispatch({type:'clear_error_message'})

const signup = dispatch => async ({email, password})=>{
    try {
        const response = await trackerAPI.post('/signup',{email,password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type:'signin', payload: response.data.token})
        
        navigate('TrackList')
    } catch (error) {
        dispatch({type: 'add_error', payload:'Something went wrong with Sign Up.'})
    }
}

const signin = dispatch => async ({email, password})=>{
    try {
        const response = await trackerAPI.post('/signin',{email,password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type:'signin', payload: response.data.token})
        
        navigate('TrackList')
    } catch (error) {
        dispatch({type: 'add_error', payload:'Something went wrong with Sign in.'})
    }
}

const signout = dispatch => ()=>{

}


export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage:''}
)