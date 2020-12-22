import React from 'react';

import './App.css';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <div className='page1'>
      {/* <a
   href="https://firebasestorage.googleapis.com/v0/b/ad-bot-e026e.appspot.com/o/AdityaResumeDec.pdf?alt=media&token=55ef2022-6a79-46d2-a739-5c8ed4daf58f"
      //color="transparent"
      //target="_blank"
      download>Download</a> */}
     <iframe className='page' title="My Resume" src="https://resume.creddle.io/embed/ipi4hkbimvt"
   seamless></iframe>
   
  </div>
      </header>
    </div>
  );
}

export default App;
