import React, { Component } from 'react'
import Cancel from '../assets/images/Cancel.svg'

class TableData extends Component {
    render() {
        const {key, appliance, number, time, energy} = this.props.data
       

        return (
            
            
              <tr>
                <td>{appliance}</td>
                <td>{number}</td>
                <td>{time}</td>
                <td>{energy}</td>
                
                <td><button className='delBtn' onClick={this.props.delItem.bind(this, key)}><img src={Cancel} alt='cancel'/></button></td>
                
              </tr>
             
            
          
        )
    }
}

export default TableData
