import React from 'react';

/**
 * CSS imports
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

/**
 * Presentational or DOM components
 */
import { UserBox } from './UserBox.jsx';
import { AddUserContainer } from '../containers/AddUserContainer';

/**
 * @class MainPage
 */
export class MainPage extends React.Component{
    constructor(props){
        super(props);
        /**
         * Application states:
         * 1. isLoaded > assigned async
         * 2. messages > assigned async
         * 3. keyPressEvents > onload and event-driven
         * ------
         * : Passed down to stateless Presentational | DOM components
         * : username is not state, since it's not intended to change
         * :. it was cached in on Window global
         */
        this.state = {
            keyPressEvent: (event) => {
                AddUserContainer.onKeyPress(event, (isLoaded, messages) => {
                    this.setState({
                        isLoaded: isLoaded,
                        messages: messages
                    })
                });
            }
        };

        // this.updateMessage = this.updateMessage.bind(this);

    }

    render(){
        console.log('rendered mainpage...');
        return (
            <UserBox 
                isLoaded={this.state.isLoaded} 
                keyPressEvent={this.state.keyPressEvent} 
                messages={this.state.messages} 
            />
        );
    }
}