import React from 'react'

function register() {
    return (
        <div  style={{paddingTop: "20vh"}}>
            <form className="shadow-lg p-3 mb-5 bg-white rounded" style={{width: "18rem",margin:"auto", paddingTop:"20vh" }}>
            <div className="form-group">
                <label htmlFor="InputEmail1">Email address</label>
                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword1">Password</label>
                <input type="password" className="form-control" id="InputPassword1"/>
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword1Check">Verify Password </label>
                <input type="password" className="form-control" id="InputPassword1Check"/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Keep me Signed In</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default register
