import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { browserHistory } from 'react-router'; // importing from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as ReactBootstrap from 'react-bootstrap';

import Routes from './routes';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);

registerServiceWorker();
