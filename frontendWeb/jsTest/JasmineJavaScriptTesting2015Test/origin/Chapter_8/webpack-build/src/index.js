import React from 'react';
import Application from './Application.jsx';
import './index.css';


var mountNode = document.getElementById('application-container');
React.render(React.createElement(Application, {}), mountNode);
