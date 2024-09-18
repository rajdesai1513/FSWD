import React from 'react';
import './MainContent.css'
const MainContent = ({page}) => {
  return (
    <div className="main-content" >
      <h1>{page}</h1>
      <p>This is the {page} content area.</p>
    </div>
  );
}

export default MainContent;