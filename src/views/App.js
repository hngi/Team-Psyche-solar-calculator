import React, { Component } from 'react';

import Logo from '../assets/images/Logo.svg'
import DisplayTable from '../components/DisplayTable';
import AddItem from '../components/AddItem';
import AddItemModal from '../components/AddItemModal';
import CalcInfo from '../components/CalcInfo';






class App extends Component {

  state = {
    data: [],
  }

  componentDidMount(){
    this.triggerModal();
   
  }

  generateQuickGuid() {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
  }

  addItem = (data) => {
    const newData = {key: this.generateQuickGuid(), ...data}
  
    this.setState({data: [...this.state.data, newData]})

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

  delItem = (key) => { 
    this.setState({data: [...this.state.data.filter(
      item => item.key !== key
    )]})
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
                  <AddItem addItem={this.addItem} />         
              </div>
            </div>
                  <AddItemModal addItem={this.addItem} />
          </div>

          <div className='calc-info bg-white fl '>
            <div className=''>
              <CalcInfo data={this.state.data} />
              <div className='calc-data'>
                  <h3 className='ttu ma3'>Appliance List</h3>
              </div>
              <div className='ma3'>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Time</th>
                        <th>Energy</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        <DisplayTable delItem={this.delItem}  data={this.state.data} />
                    </tbody>
                  </table>
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
