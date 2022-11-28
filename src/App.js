import React, {useEffect, useState} from 'react';
import Viewport from '../src/component/viewport/viewport'
import GridWidgets from '../src/component/grid/grid'
import './App.css';

function App() {
 
  return (
    <div className="App">
     
      <Viewport forDesktop forMobile>
         <GridWidgets />
      </Viewport>
      
    </div>
  );
}

export default App;
