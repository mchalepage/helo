import React from 'react';
import './App.css';
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Nav from './Components/Nav/Nav'
import Post from './Components/Post/Post'

function App() {
  return (
    <div className="App">
      Who do you think you are? I am
      <Nav />
      <Auth />
      <Dashboard />
      <Form />
      <Post />
    </div>
  );
}

export default App;