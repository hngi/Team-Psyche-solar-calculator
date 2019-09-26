import React from "react";

const ListAppliances = () => {
  return (
    <main className="container">
      <section className="row">
        <p className="h6 font-weight-bold mt-5 pl-3 pt-3 text-primary">
          APPLIANCES
        </p>
        <div className="col-12">
          <div className="card">
            <div className="card-body row">
              <div className="col-10 card-head">Television</div>
              <div className="col-2 card-head">X</div>
              <div className="col-12">
                <div className="row card-foot">
                  <div className="col-10">Count 15</div>
                  <div className="col-2 text-danger">x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ListAppliances;
