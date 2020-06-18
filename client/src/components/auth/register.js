import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import axios from 'axios'

export default function Register() {
    const [email, setEmail] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    const onSubmit = async (event)=>{
        event.preventDefault();
        console.log('submitting New User')
        const newUser = { email, password, passwordCheck,displayName};
        await axios.post('/users/register', newUser
        );
        const loginRes = await axios.post('/users/login', {email, password,
        });
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push('/user')
    }

    return (
        <div>
             <div  style={{paddingTop: "20vh"}}>
            <form onSubmit={onSubmit} className="shadow-lg p-3 mb-5 bg-white rounded" style={{width: "18rem",margin:"auto", paddingTop:"20vh" }}>
            <div className="form-group">
                <label htmlFor="EmailInput">Email address</label>
                <input type="email" className="form-control" id="EmailInput" value={email}
              onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="displayName">Display Name</label>
                <input type="Text" className="form-control" id="displayName" value={displayName}
              onChange={(e) => setDisplayName(e.target.value)} aria-describedby="nameHelp"/>
                <small id="nameHelp" className="form-text text-muted">Keep It Clean and Civil Please !</small>
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword1">Password</label>
                <input type="password"  autoComplete="new-password" className="form-control"  value={password}
              onChange={(e) => setPassword(e.target.value)} id="InputPassword1"/>
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword1Check">Verify Password </label>
                <input type="password" className="form-control" value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)} id="InputPassword1Check"/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input"  id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Keep me Signed In</label>
            </div>
            <button type="submit" value="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    )
}
