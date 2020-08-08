import React, { useState, useEffect } from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

const App = () => {
    const [state, setState] = useState({
        lat: null,
        errorMessage: ''
    })
    const { lat, errorMessage } = state 

    useEffect(() => {
        console.log('My component was rendered')
        window.navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            setState({ 
                lat: position.coords.latitude,
                errorMessage: null,
                loading: false
            })
        }, err => {
            setState({
                errorMessage: err.message,
                loading: false,
                lat: null
            })
        })
    }, [])

    const renderContent = () => {
        if (errorMessage && !lat) {
            return <div>Error: {errorMessage}</div>
        }
        if (!errorMessage && lat) {
            return <div><SeasonDisplay lat={lat} /></div>
        }
        return (
            <div>
                <Spinner message="Please accept location request" />
            </div>
        )
    }

    return (
        <div className="border red">
            {renderContent()}
        </div>
    )
}
export default App
