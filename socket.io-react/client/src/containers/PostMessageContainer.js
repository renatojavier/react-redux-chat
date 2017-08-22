// import axios from 'axios';
// import store from '../stores/MessagesStore';
// import { ActionPostMessage } from '../actions/IndexAction';

export class PostMessageContainer{
    
    static delegateAction(io, id, username, message, event){
        PostMessageContainer.pushMessageToChannels(io, id, username, message);
        PostMessageContainer.clearInput(event);
    }

    static clearInput(event){
        event.target.value = null;
    }

    static scrollToLatest(){
        let height = document.querySelector('.list-group').clientHeight + document.querySelector('.list-group-item').clientHeight;
        document.getElementById('sp-message-list').scrollTop = height;
    }

    static pushMessageToChannels(io, id, username, message){
        io.emit('post message', {
            id: id,
            username: username,
            message: message
        });
        /*
        axios
            .post('http://localhost:2087/services/post-message/', {
                id: id,
                username: username,
                message: message
            })
            .then((response) => {
                
                io.on('message posted', (username, message) => {
                    console.log(`${username} sent a message: ${message}`);
                });

                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
        */
    }
}