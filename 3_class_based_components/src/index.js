import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { lat: null, long: null, errMessage: '' }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude, long: position.coords.longitude})
            },
            (err) => {
                this.setState({errMessage: err.message})
            }
        );
    }
    render() {

        return (
            <div>
                Latitude: {this.state.lat} <br />
                longitude: {this.state.long} <br />
                Error message: {this.state.errMessage}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))