import React from "react";
import ThunderBolt from "../assets/images/Thunderbolt.svg";

const Banner = () => {
  return (
    <section className="col-10 offset-1 banner mb-5">
      <div className="row">
        <div className="col-3 total-consumption">
          <span className="h4">Total</span>
          <span className="h6 con">Consumption</span>
        </div>
        <div className="col-2">
          <img className="bolt" src={ThunderBolt} alt="bolt" />
        </div>
        <div className="col-3 ml-2">
          <span className="h4 wh-day text-white">309Wh/day</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
