import '../_mockLocation'
import React, {useContext, useCallback} from 'react'
import useLocation from '../hooks/useLocation'
import {StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import Map from '../components/Map'
import {Context as LocationContext} from '../context/LocationContext'
import TrackForm from '../components/TrackForm'
import {FontAwesome} from '@expo/vector-icons'

const TrackCreateScreen = ({isFocused})=>{
    const {state: {recording}, addLocation} = useContext(LocationContext)
    const callback = useCallback(location => {
        addLocation(location, recording)
    },[recording])
    const [err] = useLocation(isFocused || recording, callback )

    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={styles.header} h3>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text>:null}
            <TrackForm />
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={30}/>
}

const styles = StyleSheet.create({
    header:{
        marginTop:25
    }
})

export default withNavigationFocus(TrackCreateScreen)