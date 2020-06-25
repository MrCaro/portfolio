import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/main.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      {/*TODO create preload component*/}
      <div id="wrapper-preloader">
          <div id="container-preloader">
              <div id="preload">
                  <div>
                      <p className="text-cc_gray-dark uppercase loading-text">loading...</p>
                  </div>
              </div>
          </div>
      </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
