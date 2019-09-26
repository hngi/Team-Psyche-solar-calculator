import React from "react";

const AddAppliance = () => {
  return (
    <section className="col-lg-4 offset-lg-1 hide-small">
      <div className="bg-white">
        <p className="text-left mb-5">Add an appliance</p>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">NAME OF APPLIANCE</label>
            <input
              type="text"
              className="form-control"
              id="Appliancename"
              aria-describedby="name"
              placeholder="Appliance Name"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-lg-6">
              <label htmlFor="appliances">No of appliances</label>
              <input
                type="text"
                className="form-control"
                placeholder="No of appliances"
              />
            </div>
            <div className="form-group col-lg-3">
              <label htmlFor="energy">Energy</label>
              <input
                type="text"
                className="form-control"
                placeholder="Energy"
              />
            </div>
            <span className="watts">Watts</span>
          </div>
          <button className="btn btn-add w-100" type="submit">
            Add appliance
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddAppliance;
