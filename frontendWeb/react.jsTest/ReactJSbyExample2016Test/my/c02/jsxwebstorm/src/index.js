import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var data = [
    {"when": "2 minutes ago",
        "who": "Jill Dupre",
        "description": "Created new account"},
    {
        "when": "1 hour ago",
        "who": "Lose White",
        "description": "Added fist chapter"
    }];

var headings = ['When', 'Who', 'Description'];

var props = {headings: headings, changeSets: data};

ReactDOM.render(<App {...props} headings={['Updated at ', 'Author', 'Change']} />, document.getElementById('root'));
registerServiceWorker();
