import React, { Component } from 'react';
import logo from '../logo.svg';

export class Header extends Component {

renderHeader(){
    if (this.props.country === 'Romania') {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">NOt bad bro!</h1>
            </header>
        );

    } else if (this.props.country === 'Nigeria'){
            return (
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">What a shit hole!</h1>
                </header>
            );
            
    }else{
        return <p>Where's that on a map?</p>;
    }
}

render() {

    return(
        <div>
            {this.renderHeader()}
        </div>
    )
      
    }        
       
}
