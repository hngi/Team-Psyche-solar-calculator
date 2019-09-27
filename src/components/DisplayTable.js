import React, { Component } from 'react'
import TableData from './TableData';

class DisplayTable extends Component {
    render() {
        return this.props.data.map((data, key)=>
                <TableData data={data} key={key} />
        )
    }
}

export default DisplayTable
