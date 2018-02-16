// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './gh-pages/App/App';

const domNode: HTMLElement | null = document.getElementById('root');

if (domNode !== null) {
	ReactDOM.render(<App />, domNode);
}
