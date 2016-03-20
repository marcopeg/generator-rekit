/**
 * ReactClient
 * app startup script for development purpose
 */

// console.log('ENV_PROP:', ENV_PROP);

require('./index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { Main } from 'utils/main-dev';
import { makeStore } from 'utils/store-dev';

import initialState from 'fixtures/initial-state-dev.fixture';
import App from 'containers/App';

export function start(targetEl, payload) {

    // apply the host's page payload
    if (payload.title) {
        initialState.app.title = payload.title;
    }

    // create the application Redux store
    let appStore = makeStore(initialState);

    ReactDOM.render((
        <Main
            app={App}
            store={appStore} />
    ), targetEl);
}
