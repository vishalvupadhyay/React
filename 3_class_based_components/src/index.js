import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, long: null, errMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
            (err) => this.setState({errMessage: err.message})
        );
    }

    render() {        
        if (this.state.errMessage && !this.state.lat) {
            return <div>Error message: {this.state.errMessage}</div>
        }
        if (this.state.lat && !this.state.errMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div>Loading!!</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))