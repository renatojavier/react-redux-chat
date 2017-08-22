import React from 'react';

import { OldMessageItem } from './OldMessageItem.jsx';
import { NewMessageItem } from './NewMessageItem.jsx';

import store from '../stores/MessagesStore';

export class MessageList extends React.Component{
    render(){
        return (
            <div className="stacked-panels" id="sp-message-list">
                <ul className="list-group">
                    <OldMessageItem messages={this.props.messages} />
                    <NewMessageItem message={store.getState()} />
                    {console.log( store.getState() )}
                </ul>
            </div>
        );
    }
}