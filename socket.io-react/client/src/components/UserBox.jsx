import React from 'react';

import { MessageList } from './MessageList.jsx';
import { MessageBox } from './MessageBox.jsx';

export class UserBox extends React.Component{
    
    render(){

        return (
            <div>
                { this.addChatView(this.props.isLoaded) }
                <div className="container-user-box">
                    <div className="stacked-panels" id="sp-user-box">
                        <div>
                            <input onKeyPress={this.props.keyPressEvent} type="text" className="form-control" autoFocus placeholder="Type username & press enter"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addChatView(bool){
        if( bool ){
            return (
                <div className="container-chat" data-loaded={this.props.isLoaded}>
                    <MessageList messages={this.props.messages} />
                    <MessageBox />
                </div>
            );
        }
    }
}