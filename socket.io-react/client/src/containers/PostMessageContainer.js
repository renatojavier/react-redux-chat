import store from '../stores/MessagesStore';
import { ActionPostMessage } from '../actions/IndexAction';

export class PostMessageContainer{
    
    static delegateAction(id, username, message, event){

        store.dispatch(ActionPostMessage(id, username, message));

        PostMessageContainer.clearInput(event);
        PostMessageContainer.scrollToLatest();
    }

    static clearInput(event){
        event.target.value = null;
    }

    static scrollToLatest(){
        let height = document.querySelector('.list-group').clientHeight + document.querySelector('.list-group-item').clientHeight;
        document.getElementById('sp-message-list').scrollTop = height;

    }

    
}