import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './components/app/App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const rootRender = ReactDOMClient.createRoot(rootElement);
  rootRender.render(
    <App />
  );
}
