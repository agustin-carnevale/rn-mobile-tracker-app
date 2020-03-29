import React,{useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Context as TrackContext} from '../context/TrackContext'
import MapView, {Polyline} from 'react-native-maps'
import Spacer from '../components/Spacer'

const TrackDetailScreen = ({navigation})=>{
    const {state} = useContext(TrackContext)
    const _id = navigation.getParam('_id')
    const track = state.find(t => t._id ===_id)
    const initialCoords = track.locations[0].coords

    return(<>
        <Spacer>
            <Text style={{fontSize: 32}}>{track.name}</Text>
        </Spacer> 
        <MapView 
            initialRegion={{
                ...initialCoords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            style={styles.map}
        >
            <Polyline  
                coordinates={track.locations.map(l=>l.coords)}
                strokeColor="#ff00ff"
                fillColor="rgba(102, 255, 51,0.5)"
                strokeWidth={4}
            />
        </MapView>
    </>)
}

const styles = StyleSheet.create({
    map:{
        height: 300
    }
})

export default TrackDetailScreen