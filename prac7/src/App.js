import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import './App.css'; // for general app styling
import MainContent from './MainContent';

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="App">
      <Sidebar setPage={setPage} />
      <div className="content">
        <MainContent page={page} />
      </div>
    </div>
  );
}

export default App;