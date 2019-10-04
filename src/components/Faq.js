import React, { Component } from "react";
import Logo from "../assets/images/solar-logo.png";
import "../styles/FaqStyle.css";

class Faq extends Component {
    render(){
        return (
            <div>
                <header> 
                    <div className="logo">
                     <img src={Logo} alt="logo"/>
                    </div>
                </header>
            <main>
                <div className="title">
                    <h1 className="articleTitle">Frequently Asked Questions</h1>
                        <h2 className="whatSolar">
                            <span>
                                <strong>What is the Solar App Calculator</strong>
                            </span>
                        </h2>
                            <p>
                                <span>
                                The Solar Calculator is a web-based application built to help homes and individuals calculate their hourly/daily consumption of solar energy 
                                It can also be used to theorize about the number of panels needed in a home.<br/> 
                                Energy (W) refers to the amount of power the appliances consume per day. Time (Hr) refers to the amount of time appliances are actively using the power supply.                 
                                </span>
                            </p>

                        <h2 className="whatSolar">
                            <span>
                                <strong>How is the Inverter/UPS Rating calculated</strong>
                            </span>
                        </h2>
                            <p>
                                <span>
                                    Inverter power is rated in VA or KVA.<br/>
                                    Power in VA = AC Voltage x AC Current in Amps<br/>
                                    Power in KVA = AC Voltage x AC Current in Amps/1000<br/>
                                    <b>Power in Watts = AC Voltage x AC Current in Amps x PF</b><br/>
                                    Where PF = power factor<br/>
                                    <b>Power in KW = AC Voltage x AC Current in Amps x PF/1000</b><br/>
                                    Also  <b>Power in W = Power in VA x PF</b><br/>
                                            <b>Power in KW = Power in KVA x PF</b><br/>
                                    
                                    Suppose we want to size an inverter to carry the following loads:<br/>
                                    1. 1 Lighting load, 100W for 2 hours<br/>
                                    2. 1 Standing fans of 76W, each for 5 hours<br/>
                                    3. 2 LCD TV, 23W for 4 hours <br/>
                                    4. 2 Home Theatre Music System, 250W for 1 hour<br/>
                                    5. 2 Juice extractor, 250W for 1 hour<br/>
                                    
                                    Applying Power in KW = Power in KVA x PF<br/>
                                    <b>Power in KVA  = Power in KW/PF = Power in KW/0.8    (Nominal PF = 0.8, which is standard for homes)</b><br/>
                                    
                                    <b>Total load in Watts hour = (1 x 100 x 2) + (1 x 76 x 5) + (2 x 23 x 4) + (2 x 250 x 1) + (2 x 250 x 1) = 1764W = 1.764KW</b><br/>
                                    Power in KVA = 1.764/0.8 = 2.205<br/>
                                    An inverter of standard rating 2.5KVA is required to carry the loads above.<br/>
                                </span>
                            </p>

                        <h2 className="whatSolar">
                            <span>
                                <strong>How is the Inverter/UPS Rating calculated</strong>
                            </span>
                        </h2>
                        <p>
                            <span>
                                Inverter power is rated in VA or KVA.<br/>
                                Power in VA = AC Voltage x AC Current in Amps<br/>
                                Power in KVA = AC Voltage x AC Current in Amps/1000<br/>
                                <b>Power in Watts = AC Voltage x AC Current in Amps x PF</b><br/>
                                Where PF = power factor<br/>
                                <b>Power in KW = AC Voltage x AC Current in Amps x PF/1000</b><br/>
                                Also  <b>Power in W = Power in VA x PF</b><br/>
                                        <b>Power in KW = Power in KVA x PF</b><br/>
                                
                                Suppose we want to size an inverter to carry the following loads:<br/>
                                1. 1 Lighting load, 100W, active for 2 hours.<br/>
                                2. 1 Standing fans of 76W, active for 5 hours.<br/>
                                3. 2 LCD TV, 23W, active for 4 hours.<br/>
                                4. 2 Home Theatre Music System, 250W active for 1 hour.<br/>
                                5. 2 Juice extractor, 250W, active for 1 hour.<br/>
                                
                                Applying Power in KW = Power in KVA x PF<br/>
                                <b>Power in KVA  = Power in KW/PF = Power in KW/0.8    (Nominal PF = 0.8, which is standard for homes)</b><br/>
                                
                                <b>Total load in Watts = (1 x 100 x 2) + (1 x 76 x 5) + (2 x 23 x 4) + (2 x 250 x 1) + (2 x 250 x 1) = 1764W = 1.764KW</b><br/>
                                Power in KVA = 1.764/0.8 = 2.205<br/>
                                An inverter of standard rating 2.5KVA is required to carry the loads above.<br/>
                            </span>
                        </p>

                        <h2 className="whatSolar">
                            <span>
                                <strong>How is the Inverter Battery Backup Time calculated</strong>
                            </span>
                        </h2>
                        <p>
                            <span>
                                Let BUT = battery backup time in hours<br/>
                                C = battery capacity in AH<br/>
                                V = battery voltage in volts<br/>
                                N = Number of batteries in series or parallel as the case may be.<br/>
                                PL= connected load in watts (W)<br/>
                        
                                Now<br/>

                                <img className="backupFormula" src="https://res.cloudinary.com/tobi-adeniji/image/upload/v1570161900/Battery/mathformula1_bbjwwo.jpg" style={{width:'300px', height:'170px'}}/><br/>
                                
                                In our example above, suppose we have selected a 24V, 2.5KVA inverter system that is to use two 12V batteries in series connection<br/> 
                                and suppose further that the capacity of our batteries are 200AH each, then :<br/>
                        
                                C = 200AH<br/>
                                V = 12V<br/>
                                N = 2<br/>
                                PL   = 1,764W<br/>

                                <img className="backupSolution" src="https://res.cloudinary.com/tobi-adeniji/image/upload/v1570161900/Battery/mathformula2_gu9lvt.jpg" style={{width:'370px', height:'130px'}}/><br/>

                            </span>
                        </p>

                        <h2 className="whatSolar">
                            <span>
                                <strong>How are the Number of Solar Panels calculated</strong>
                            </span>
                        </h2>
                        <p>
                            <span>
                                You can use a low-wattage (150W) and high-wattage (370W) example to establish the number of panels needed to power your home.<br/> 
                                For exmaple: If the total consumption per day is 1.764KWh, then the total consupmtion per year is
                                1.764 x 8760 [no. of hours in a calendar year] = 15452.64 kWh per year.<br/> 

                                Now to get the number of panels needed for your home, you simply divide the total consumption per year in kWh by the high-wattage panel of 370W or low-wattage panel of 150W, depending on your choice, like so:<br/> 
                                For the high-wattage panels, 15452.64/370 which is approximately 42 panels and for the low- wattage panels 15452.64/150 which is approximately 103 panels.
                            </span>
                        </p>  
                </div>
            </main>
        </div>
    );
 }
}
export default Faq;