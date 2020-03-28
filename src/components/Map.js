import React, {useContext} from 'react'
import {Text, StyleSheet, ActivityIndicator} from 'react-native'
import MapView, {Polyline, Circle} from 'react-native-maps'
import {Context as LocationContext} from '../context/LocationContext'


const Map = ()=>{
    const { state: {currentLocation, locations} } = useContext(LocationContext)

    if(!currentLocation){
        return <ActivityIndicator size='large' style={{marginTop: 200}}/>
    }
    return(
        <MapView 
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={35}
                strokeColor='rgba(158,158,255,1.0)'
                fillColor='rgba(158,158,255,0.3)'
            />
            <Polyline
                coordinates={locations.map(l =>l.coords)}
                strokeColor="#ff00ff"
                fillColor="rgba(102, 255, 51,0.5)"
                strokeWidth={4}
            />
        </MapView>
    )
}


const styles = StyleSheet.create({
    map:{
        height: 300,
        marginTop: 25
    }
})

export default Map