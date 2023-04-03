// Bước 1: import react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// Bước 2: Khai báo DOM
const root = document.querySelector('#root');
// Bước 3: Tạo React DOM
const reactRoot =ReactDOM.createRoot(root);
// Bước 4: Render
reactRoot.render(<App/>)