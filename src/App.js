import React from 'react';
import './App.css';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row title="NETFLIX ORIGINALS" />
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="Action Movies" />
      <Row title="Comedy Movies" />
      <Row title="Romance Movies" />
      <Row title="Documentaries" />
    </div>
  );
}

export default App;
