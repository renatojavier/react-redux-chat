import React from 'react';
import { render } from 'react-dom';

import { MainPage } from './components/MainPage.jsx';
import store from './stores/MessagesStore';

const Render = () => {
    render(
        <MainPage />,
        document.getElementById('root')
    );
};

store.subscribe(Render);
Render();
