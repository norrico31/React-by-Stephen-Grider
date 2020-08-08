import React from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
    state = {
        lat: null,
        errorMessage: ''
    }

    componentDidMount() {
        console.log('My component was rendered')
        window.navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            this.setState({ 
                lat: position.coords.latitude,
                errorMessage: null,
                loading: false
            })
        }, err => {
            this.setState({
                errorMessage: err.message,
                loading: false,
                lat: null
            })
        })
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered')
    }

    // React says we have to define render in class based component
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div><SeasonDisplay lat={this.state.lat} /></div>
        }
        return <div><Spinner message="Please accept location request" /></div>
    }
}

export default App
