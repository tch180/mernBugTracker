import React from "react";

function home() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid" style={{display:'flex', flexDirection:'row'}}>
        <div className="container">
          <h1 className="display-4">Current Bugs</h1>
          <p className="lead">Bug Status</p>
          <div className="bugContainer" style={{display:'flex', justifyContent:"spaceBetween"}}>
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">Submitted</h5>
              <p className="card-text">
                Bugs Submitted: 30
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">Reviewing</h5>
              <p className="card-text">
                Bugs under review:
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">Resolving</h5>
              <p className="card-text">
                Bug  being resolved:
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">resolved</h5>
              <p className="card-text">
               Bugs Resolved:
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
