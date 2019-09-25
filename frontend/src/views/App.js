import React from 'react';
import Logo from '../assets/images/Logo.svg'
import Thunderbolt from '../assets/images/Thunderbolt.svg'


function App() {

  const showModal = () => {
      console.log('you have clicked this button')
  }

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
            <div className="">
              <div className='add-form bg-white'>
              <div className="">
                  <div>
                    <h1>Add an appliance</h1>
                  </div>
                  <div>
                    <div>
                      <label>Name of appliance</label>
                      <input type='text' placeholder='Televsion' />
                    </div>
                    <div className='' >
                      <div className='' >
                      <div>
                        <label>Number of Appliance</label>
                        <input type='number' placeholder='1' />
                      </div>
                      <div>
                        <label>Energy</label>
                        <input type='number' placeholder='1' />
                        <span>Watt</span>
                      </div>

                      </div>

                    </div>
                   
                    

                  </div>

                  <div>

                    <button className='btn-add'>Add  Appliance</button>
                  </div>
              </div>
              </div>
             

            </div>

          </div>
          <div className='calc-info bg-white fl w-100 w-50-ns pa2'>
            <div className=''>
              <div className='calc-total'>
                <div>
                  <h3>Total</h3>
                  <h4>comsumption</h4>
                </div>
                <div>
                  <img src={Thunderbolt} alt='thunderbolt' />
                </div>
                <div>300<span>Wh/day</span></div>
              </div>
              <div className='calc-data'>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div >
        <button className='btn-add-circle' onClick={showModal}>+</button>
       
      </div>
      </main>
    </div>
  );
}

export default App;
