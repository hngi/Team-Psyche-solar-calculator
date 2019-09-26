import React from "react";

const Appliances = () => {
  return (
    <section className="col-lg-3 hide-small">
      <div className="bg-white list-appliances">
        <h5 className="text-sm-left font-weight-bold">Calculations</h5>
        <p className="text-left mb-5">
          Total Consumption -{" "}
          <span className="h3 text-primary">3360Wh/day</span>
        </p>
        <div>
          <p className="h6 font-weight-bold">Appliances</p>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="px-4" scope="col">
                    Name
                  </th>
                  <th className="px-4" scope="col">
                    Number
                  </th>
                  <th className="px-4" scope="col">
                    Hours
                  </th>
                  <th className="px-4" scope="col">
                    Energy
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="px-4" scope="row">
                    1
                  </th>
                  <td className="px-4">Mark</td>
                  <td className="px-4">Otto</td>
                  <td className="px-4">@mdo</td>
                  <td className="px-1">
                    <span className="badge badge-secondary">x</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appliances;
