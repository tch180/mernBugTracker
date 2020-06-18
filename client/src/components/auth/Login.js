import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import axios from 'axios'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setUserData} = useContext(UserContext);
    const history = useHistory();


    const onSubmit = async (event)=>{
        event.preventDefault();
        console.log('Logging the user in')
        const loginUser = { email, password, };
        await axios.post('/users/login', loginUser
        );
        const loginRes = await axios.post('/users/login',loginUser,
        );
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push('/user')
    }

    return (
        <div>
            <h2 style={{textAlign:'center'}}>LOGIN</h2>
             <div style={{paddingTop: "20vh"}}>
            <form onSubmit={onSubmit} className="shadow-sm p-3 mb-5 bg-white rounded" style={{width: "18rem",margin:"auto", paddingTop:"20vh" }}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" value={email}
              onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password"autoComplete="current-password" className="form-control" value={password}
              onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        </div>
    )
}
