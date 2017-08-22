import React from 'react';

import store from '../stores/MessagesStore';
import { ActionPostMessage } from '../actions/IndexAction';
import {PostMessageContainer} from '../containers/PostMessageContainer';

import socket from 'socket.io-client';
const io = socket('http://10.202.215.79:2087/');

export class MessageBox extends React.Component{

    handleOnKeyPress(event){
        if( event.which !== 13 ) return;

        const id = Date.now();
        const username = window.username;
        const message = event.target.value;

        PostMessageContainer.delegateAction(io, id, username, message, event);
    }

    socketListeners(){
        let counterRestChannels = 0;

        io.on('show message to channels', (data) => {
            if( counterRestChannels === 0 ){
                store.dispatch(ActionPostMessage(data.id, data.username, data.message));
                //console.log('emitted: ', counterRestChannels);
                PostMessageContainer.scrollToLatest();
            }
            counterRestChannels += 1;
        });

        /*
        let counterSelfChannel = 0;
        io.on('show self message', (data) => {
            if( counterSelfChannel === 0 ){
                store.dispatch(ActionPostMessage(data.id, data.username, data.message));
                //console.log('emitted: ', counterSelfChannel);
                PostMessageContainer.scrollToLatest();
            }
            counterSelfChannel += 1;
        });
        */
    }

    render(){
        
        this.socketListeners();

        return (
            <div className="stacked-panels" id="sp-message-box">
                <div className="form">
                    <div className="input-group">
                        <div className="input-group-addon badge-warning" style={{ borderRadius: 0}}>
                            <small>signed in as:&ensp;</small>
                            <strong id="username-plate">....</strong>
                        </div>
                        <input type="text" onKeyPress={this.handleOnKeyPress} className="form-control" autoFocus placeholder="Enter message"/>
                    </div>
                </div>
            </div>
        );
    }
}