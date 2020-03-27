import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import NavLink from '../components/NavLink'
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SigninScreen = ()=>{
    const {state, signin, clearErrorMessage} = useContext(AuthContext)

    return(
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign In to your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Login"
                onSubmit={signin}
            />
            <NavLink 
                text="Don't have an account? Sign Up please"
                routeName='Signup'
            />
        </View>
    )
}

SigninScreen.navigationOptions = ()=>{
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
})

export default SigninScreen