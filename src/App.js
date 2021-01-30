import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
        <div className="app_header">
          <img className="app_headerImage" src={ logo } alt="" />
        </div>
        <h1>Hello from app</h1>
      {/* Header */}

        <Post />
        <Post />
        <Post />
    </div>
  );
}

export default App;
