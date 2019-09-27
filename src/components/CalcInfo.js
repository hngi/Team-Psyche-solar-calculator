import React from "react";
import Thunderbolt from "../assets/svgs/Thunderbolt.svg";
import { H4, P, H2 } from "./typography";
import { Stack, Cluster } from "./layouts";

const CalcInfo = ({ data }) => {
  const values = data
    .map(values => {
      const value = values.number * values.time * values.energy;
      return value;
    })
    .reduce((a, b) => a + b, 0);

  //Inverter  rating in kW
  const intInvRate = values / 1000 / 0.8;
  const invRate = Math.ceil(intInvRate * 25 * 100) / 100;

  // UPS rating in kW
  const upsRate = Math.ceil((intInvRate + invRate) * 100) / 100;

  // Backup batteries kWH
  const intBut = (100 * 12 * 2) / values;
  const backupBatteries = 3 / intBut;

  // Required solar panel
  const panel = 18 * 5;
  const reqPanel = Math.ceil(values / panel / 100);
  const toPrecision = a => a.toFixed(2); 

  return (
    <Stack>
      <div className="rounded-lg bg-blue text-white -mt-10 shadow-lg">
        <Cluster.Small>
          <div className="flex justify-between items-center">
            <section>
              <H4>Total Consumption</H4>
            </section>
            <div className="flex items-center">
              <img className="mr-3" src={Thunderbolt} alt="thunderbolt" />
              <H2>{values}</H2>
              <span>Wh/day</span>
            </div>
          </div>
        </Cluster.Small>
      </div>

      <div className="rounded-lg bg-blue shadow text-white">
        <Cluster.Small>
          <div className="flex">
            <div className=" px-5 flex flex-col justify-between flex-1 text-center">
              <P small className="border-white" title="required no of solar panels">
                <b>No of Solar Panel</b>
              </P>
              <H4>{reqPanel}</H4>
            </div>
            <div className="border-l px-5 flex flex-col justify-between flex-2 text-center">
              <P small>
                <b>Inverter / UPS Rating</b>
              </P>
              <H4>{toPrecision(invRate)} kVA / {toPrecision(upsRate)}kW</H4>
            </div>
            <div className="border-l px-5 flex flex-col justify-between flex-1 text-center">
              <P small className="border-white">
                <b>Backup Batteries Duration</b>
              </P>
              <H4>{toPrecision(backupBatteries)} hrs</H4>
            </div>
          </div>
        </Cluster.Small>
      </div>
    </Stack>
  );
};

export default CalcInfo;
