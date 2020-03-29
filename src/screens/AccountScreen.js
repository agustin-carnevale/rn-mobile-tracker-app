import React, {useContext} from 'react'
import {Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Text, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {Context as AuthContext} from '../context/AuthContext'
import {FontAwesome} from '@expo/vector-icons'

const AccountScreen = ()=>{
    const {signout} = useContext(AuthContext)
    return(
        <SafeAreaView forceInset={{top: 'always'}}>
        <Spacer>
            <Text style={styles.header}>AccountScreen</Text>
        </Spacer>
        <Spacer>
            <Button title="Sign Out" onPress={signout}/>
        </Spacer>
        </SafeAreaView>

    )  
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name='gear' size={30}/>
}

const styles = StyleSheet.create({
    header:{
        fontSize: 32,
        marginTop:40
    }
})

export default AccountScreen