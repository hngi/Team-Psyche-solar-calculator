import React, { Component } from 'react'

class AddItemModal extends Component {

    state = {
        data: {
            appliance: '',
            number: 0,
            time: 0,
            energy: 0
        }
    }


    onSubmit = (e) => {
        e.preventDefault();

        this.props.addItem(this.state.data);

        this.setState({data: {
            appliance: '',
            number: 0,
            time: 0,
            energy: 0
        }})
        
    }

    onChange = (e) =>{

        this.setState({
   
        data: {...this.state.data, 
            [e.target.name]: e.target.value,
            
        }
    });
    } 
    render() {
        return (
            
              <div id="myModal" className="modal">

               
                <div className="modal-content">
                 
                  <div className=' '>
             
             <div className='ma3 tc'>
               <h1>Add an appliance</h1>
             </div>
             <form onSubmit={this.onSubmit}>
                  <div>
                    <div className='ma3'>
                      <label className=''>Name of appliance</label>
                      <input  type='text' placeholder='Televsion' required
                       name='appliance' value={this.state.data.appliance}  onChange={this.onChange}/>
                    </div>
                    <div className='' >
                      <div className='ma3 dib'>
                        <label>Number of Appliance</label>
                        <input type='number' placeholder='1' name='number' required
                        value={this.state.data.number} onChange={this.onChange}  />
                      </div>
                      <div className='ma3 dib'>
                        <label>Time  <span>Hr</span></label>
                        <input type='number' placeholder='1' name='time' required
                         value={this.state.data.time} onChange={this.onChange}/>
                       
                      </div>
                      <div className='ma3 dib'>
                        
                        <label>Energy <span>Watt</span> </label>
                        <input type='number' placeholder='1' name='energy' required
                          value={this.state.data.energy} onChange={this.onChange}/>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className='btn-add' type='submit' >Add  Appliance</button>
                  </div>
                  </form>

             <div>
               <button id='close' href='javascript;;'>Close</button>
             </div>
         </div>
                </div>

               </div>
        )
    }
}

export default AddItemModal
