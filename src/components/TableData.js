import React, { Component } from 'react'

class TableData extends Component {
    render() {
        const {appliance, number, time, energy} = this.props.data


        return (
            
            
              <tr>
                <td>{appliance}</td>
                <td>{number}</td>
                <td>{time}</td>
                <td>{energy}</td>
              </tr>
             
            
          
        )
    }
}

export default TableData
