import React from 'react';
import "./components/Styles.css"
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
// import theme from './components/AdDesigner';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <Header />
      <AdDesigner />
      <Votes />
    </div>
  );
}

export default App;
