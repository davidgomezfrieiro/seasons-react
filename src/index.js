import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    /*constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };
        
        
    }*/
    
    //THIS IS THE ONLY TIME we do direct assignment to this.state
    state = { lat: null, errorMessage: '' };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(

            //We called setState!!!!
            (position) => this.setState({ lat: position.coords.latitude }),

            //We did not!!!!
             //this.state.lat = position.coords.latitude
            (err) => this.setState({ errorMessage: err.message })

        );
    }

    renderContent() {

        if(this.state.errorMessage && !this.state.lat  ) {
            return <div>Error: {this.state.errorMessage}</div>
        }
    
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
    
        return <Spinner message='Please accept location request'/>
    }

    //React says we have to define render!!!
    render() {
        return (

            // border red is metaforical case
            <div className='border red'>
                {this.renderContent()}
            </div>
        )
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));