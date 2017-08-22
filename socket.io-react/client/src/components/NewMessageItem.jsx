import React from 'react';

export class NewMessageItem extends React.Component{
    render(){
        let messages = this.props.message;
        let messageItems = messages.map( (message,index) => {
            return (
                <li className="list-group-item" id={message.id} key={index}>
                    <strong>{message.username}:</strong>&emsp;
                    <span>{message.message}</span>
                </li>
            );
        });

        return (<span>{messageItems}</span>)
    }
}