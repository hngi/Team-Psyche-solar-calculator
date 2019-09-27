import React, { Component } from 'react'
import Thunderbolt from '../assets/images/Thunderbolt.svg'

 class CalcInfo extends Component {

    render() {


        const values = this.props.data.map((values) => {
              console.log(values.number)
              const value = values.number * values.time * values.energy
              return value
        }).reduce((a, b) => a + b, 0)
        // console.log(values)

        //Inverter  rating in kW
        const intInvRate = values/1000/0.8
        const invRate = Math.ceil((intInvRate * 25)* 100) /100

        // UPS rating in kW
        const upsRate = Math.ceil(( intInvRate + invRate)* 100) /100

        // Backup batteries kWH
        const intBut = 100*12*2/values
        const but = 3/intBut

        // Required solar panel
        const panel = 18*5
        const reqPanel =  Math.ceil(values/panel/100)

        return (
        <div className='calc-total'>
          <h3 className="ttu ma3 tracked">Calculations</h3>
          <div className=" dib ma3 ">  
            <h4>Total Consumption</h4>
          </div>
          <div className=" dib ma2"> 
            <img src={Thunderbolt} alt='thunderbolt' />
          </div >
          
          <div className="dib ma2">{values}<span>Wh/day</span></div>
          <hr className='ml3 mr3' />
          <div className=" ma3">  
            <h4>Inverter / UPS Rating</h4>
            {invRate} kVA / {upsRate}kW
          </div>
          <hr className='ml3 mr3' />
          <div className=" ma3">  
            <h4>Required No of Solar Panel</h4>
            {reqPanel}
          </div>
          <hr className='ml3 mr3' />
          <div className="ma3">  
            <h4>Batteries for Backup Power for two</h4>
            {but}hrs
          </div>
         
        </div>
        )
    }
}

export default CalcInfo
