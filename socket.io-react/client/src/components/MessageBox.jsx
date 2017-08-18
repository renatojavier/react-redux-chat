import React from 'react';

import {PostMessageContainer} from '../containers/PostMessageContainer';

export class MessageBox extends React.Component{

    handleOnKeyPress(event){
        if( event.which !== 13 ) return;

        const id = Date.now();
        const username = window.username;
        const message = event.target.value;

        PostMessageContainer.delegateAction(id, username, message, event);
    }

    render(){
        return (
            <div className="stacked-panels" id="sp-message-box">
                <div className="form">
                    <input type="text" onKeyPress={this.handleOnKeyPress} className="form-control" autoFocus placeholder="Enter message"/>
                </div>
            </div>
        );
    }
}