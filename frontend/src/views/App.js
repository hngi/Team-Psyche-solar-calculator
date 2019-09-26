import React from "react";
import Header from './Header'
import Appliances from './Appliances';
import AddAppliance from "./AddAppliance";
// import Banner from "./banner";
// import ListAppliances from "./ListAppliances";

const App = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <AddAppliance />
          <Appliances />
          {/* <Banner />
          <ListAppliances /> */}
        </div>
      </div>
    </>
  );
}

export default App;