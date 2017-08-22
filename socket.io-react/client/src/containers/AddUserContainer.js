import axios from 'axios';

/**
 * Controller component
 */
export class AddUserContainer{

    static onKeyPress(event = null, callback = () => {}){
        if( event.which === 13 ){

            window.username = event.target.value;
            // hide Userbox screen when messages has been loaded
            let container = (event.target).parentElement.parentElement.parentElement;
            container.style.display = 'none';

            axios.get('http://10.202.215.79:2087/services/get-messages/')
            .then((response) => { 
                
                const messages = response.data;
                const isLoaded = true;

                setTimeout(() => {
                    callback(isLoaded, messages);
                    document.getElementById('username-plate').innerText = window.username;
                    let height = document.querySelector('.list-group').clientHeight + document.querySelector('.list-group-item').clientHeight;
                    document.getElementById('sp-message-list').scrollTop = height;
                }, 250);

            })
            .catch((err) => {
                callback(false, []);
            });
        }

        return;
    }

    static loadPreviousMessages(){
        axios.get('http://localhost:2087/services/get-messages/')
        .then((response) => {
            console.log(response);
            let serverMessages = response.data;
            return serverMessages;
        })
        .catch((err) => {
            return [];
        });
    }

    static mockServerMessages = [
        {
            "id" : 1502951097685,
            "username" : "alpha",
            "message" : "Anyone here?"
        },
        {

            "id" : 1502951722610,
            "username" : "beta",
            "message" : "Hi alpha"
        },
        {
            "id" : 1502952300034,
            "username" : "beta",
            "message" : "Have you left already, alpha?"
        },
        {
            "id" : 1502952300034,
            "username" : "alpha",
            "message" : "Still here"
        }
    ];
}