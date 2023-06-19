import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import './app/styles/styles.scss';
import {I18nextProvider} from 'react-i18next';
import i18n from './app/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
        {/* </Provider> */}
    </React.StrictMode>,
);
