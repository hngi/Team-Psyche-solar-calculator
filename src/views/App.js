import React, { Component } from 'react';
import Logo from '../assets/images/Logo.svg'
import Thunderbolt from '../assets/images/Thunderbolt.svg'





class App extends Component {

  
  componentDidMount(){
    this.triggerModal();
  }

  triggerModal(){
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var close = document.getElementById("close");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    close.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
  }

  handleSubmit(){
    console.log('calculating')
  }

  render() {  

  return (
    <div className="App">
      <header>
       <div className='logo'>
        <img src={Logo} alt='logo'/>

       </div>
      </header>
      <main>
      <div className="mw9 center ph3-ns">
        
          <div className="fl add-form bg-white mobile">
           
              <div className=' '>
             
                  <div className='ma3 tc'>
                    <h1>Add an appliance</h1>
                  </div>
                  <div>
                    <div className='ma3'>
                      <label className=''>Name of appliance</label>
                      <input  type='text' placeholder='Televsion' />
                    </div>
                    <div className='' >
                      <div className='ma3 dib'>
                        <label>Number of Appliance</label>
                        <input type='number' placeholder='1' />
                      </div>
                      <div className='ma3 dib'>
                        <label>Time  <span>Hr</span></label>
                        <input type='number' placeholder='1' />
                       
                      </div>
                      <div className='ma3 dib'>
                        
                        <label>Energy <span>Watt</span> </label>
                        <input type='number' placeholder='1' />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className='btn-add' type='submit' onClick={this.handleSubmit}>Add  Appliance</button>
                  </div>
              </div>
              </div>

              <div id="myModal" className="modal">

               
                <div className="modal-content">
                 
                  <div className=' '>
             
             <div className='ma3 tc'>
               <h1>Add an appliance</h1>
             </div>
             <div>
               <div className='ma3'>
                 <label className=''>Name of appliance</label>
                 <input  type='text' placeholder='Televsion' />
               </div>
               <div className='' >
                 <div className='ma3 dib'>
                   <label>Number of Appliance</label>
                   <input type='number' placeholder='1' />
                 </div>
                 <div className='ma3 dib'>
                   <label>Time  <span>Hr</span></label>
                   <input type='number' placeholder='1' />
                  
                 </div>
                 <div className='ma3 dib'>
                   
                   <label>Energy <span>Watt</span> </label>
                   <input type='number' placeholder='1' />
                 </div>
               </div>
             </div>
             <div>
               <button className='btn-add' type='submit' onClick={this.handleSubmit}>Add  Appliance</button>
             </div>

             <div>
               <button id='close' href='javascript;;'>Close</button>
             </div>
         </div>
                </div>

               </div>
              
             

            </div>

          
          <div className='calc-info bg-white fl '>
            <div className=''>
              <div className='calc-total'>
                <div className="mr4 ml4 mt3">
                  <h3 className="ttu tracked">Calculations</h3>
                </div>
                <div className="dib mr4 ml4">  
                  <h4>Total Consumption</h4>
                </div>
                <div className="dib mr4 ml4"> 
                  <img src={Thunderbolt} alt='thunderbolt' />
                </div >
                <div className="dib mr4 ml4">300<span>Wh/day</span></div>
              </div>
              <div className='calc-data'>
                <div className='ma3'>
                  <h3 className='ttu'>Appliance List</h3>
                </div>
                <div className='ma3'>
                <table>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Time</th>
                    <th>Energy</th>
                  </tr>
                  </thead>
                 
                  <tbody>
                  <tr>
                    <td>Cooker</td>
                    <td>1</td>
                    <td>2</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>AC Conditioner</td>
                    <td>5</td>
                    <td>10</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Radio</td>
                    <td>2</td>
                    <td>5</td>
                    <td>10</td>
                  </tr>
                  </tbody>
                  
                 
                </table>
                </div>
                
              </div>
            </div>
          </div>
       
    

      <div >
        <button id="myBtn" className='btn-add-circle' >+</button>

      </div>
      </main>
    </div>
  );
}
}

export default App;
