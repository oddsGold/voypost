import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import App from "./App";

if (document.getElementById('root')) {
    const root = ReactDOMClient.createRoot(document.getElementById('root'));
    root.render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

