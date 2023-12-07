import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
//import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import { persistor, store } from '../src/redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename="/car-rental-app">
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
