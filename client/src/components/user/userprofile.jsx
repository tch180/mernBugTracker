import React from 'react'

export default function userprofile() {
    return (
        <div>
            <div className="card" style={{width: "12rem"}}>
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
                <h5 className="card-title">Hello: "Username"</h5>
                <p className="card-text">Current Bugs: "Number"</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    )
}
