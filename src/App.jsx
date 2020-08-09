import React, { useState, useEffect } from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

const App = () => {
    const [latState, latSetState] = useState({
        lat: null,
        errorMessage: ''
    })
    const { lat, errorMessage } = latState 

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            latSetState({ 
                lat: position.coords.latitude,
                errorMessage: null,
            })
        }, err => {
            latSetState({
                errorMessage: err.message,
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
