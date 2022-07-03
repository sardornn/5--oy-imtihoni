import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/Auth-Context';
import { PostsProvider } from './Context/PostContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
    <AuthProvider>
    <PostsProvider>

    <App />

    </PostsProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.Fragment>
);


