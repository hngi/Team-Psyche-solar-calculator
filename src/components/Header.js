import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import logo_single from '../assets/images/solar-logo.png';
import solar from '../assets/svgs/solar.svg';
// import { App } from "../views/App";

// import header from "../assets/images/header.png";


class Header extends Component {
    render(){

        return(
            <div>

                {/* How to use starts here*/}
                <div className=" navbar-wrapper">
                        <nav className="navbar navbar-expand-lg bg-transparent navbar-dark ">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#"></a>
                                <div>
                                <img class="img-responsive" src={logo_single} height="150px;" width="200px;" alt="Solar calc Logo" />
                                </div>
                                <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>  
                                    <div className="collapse navbar-collapse bg-transparent" id="navbarTogglerDemo01">     
                                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                                            <li className="nav-item">
                                            <a className="nav-link active" href="index.html">Home</a>
                                            </li>
                                            <li className="nav-item">
                                            <a className="nav-link" href="./pages/contact.html" >Contact Us</a>
                                            </li>
                                            <li className="nav-item">
                                            <a className="nav-link " href="faq.html">FAQ</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div>
                        
                        <div>
                            <div className ="cont">
                                <img class="img-responsive background" src={solar} alt="Solar calc Logo" />
                                <div className="bg-text">
                                    <h2>SWITCH TO SOLAR</h2>
                                    <h3> AND SAVE THIS PLANET</h3>
                                    <h5>Purchase, Install, Calculate.</h5><br></br>
                                    <div>
                                        <NavLink to="/App" className="contact">START CALCULATING</NavLink> 
                                    </div>
                                </div>
                    
                            </div>  
                    </div>
                                    <section>
            <div className="container">
            <div className="row">
                <div className="col-md-4 col-xs-12">
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><b>Get Started</b></h5>
                                    <p className="card-text">Now that you're here, I believe you're 
                                    aready using solar or at least making some plans to. Welcome aboard.
                                    Now this is what you neeed to do:</p>
                                    
                                </div>
                                </div>
                </div>
                <div className="col-md-4 col-xs-12">
                    <div className="card cardss">
                        <div className="card-body">
                            <h5 className="card-title"><b>Calculate Your Energy Rates</b></h5>
                            <p className="card-text">As a house owner, you should be aware of the gadgets in your home which uses solar, 
                            their energy cosumption rates and the time</p>
                        
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-xs-12">
                    <div className="card cardss">
                        <div className="card-body">
                            <h5 className="card-title"><b>Calculate</b></h5>
                            <p className="card-text">Proceed with calculation by entering your appliances energy 
                            consumption and the maximum time it is being used </p>
                            
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
            <footer className="container-fluid foot">
        <p className="text-center">&copy; Team Psyche-HNG</p>
    </footer>

        </div>
        </div>
        );
    };
};

export default Header;