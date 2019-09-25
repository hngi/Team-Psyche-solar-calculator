import React from 'react';
import Logo from '../assets/images/Logo.svg'

function App() {
  return (
    <div className="App">
      <header>
       <div className='logo'>
        <img src={Logo} alt='logo'/>

       </div>
      </header>
      <main>
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-50-ns pa2">
            <div className="outline bg-white pv4"></div>
          </div>
          <div className="fl w-100 w-50-ns pa2">
            <div className="outline bg-white pv4"></div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}

export default App;
