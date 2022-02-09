
import { Link , useHistory } from 'react-router-dom';
import React, {useState} from 'react'
import './Login.css';
import { auth } from './firebase';



function Login() {
    const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signIn = e => {
    e.preventDefault();
    //firebase
    auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
                history.push('/')
            }

        })

.catch(error => alert(error.message))
}
const register = e => {
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        //it successfully  user sign in with email and password
        if(auth){
            history.push('/')
        }
    })
    .catch(error => alert(error.message))

}

    return (
        <div className="login">
            <Link to = "/">
           <img className="login--logo" src="http://1.bp.blogspot.com/-ZcP0cpBb5_o/TmVVgiOj42I/AAAAAAAADM8/zkdSvap1sv4/s1600/Amazon_logo.png" /> 
           
           </Link>
           <div className='login--container'>
               <h1>Sign-In</h1>
               <form>
                   <h5>E-mail</h5>
                   <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                   <h5>Password</h5>
                   <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                   <button type='submit' onClick={signIn} className="login--signButton">Sign In</button>
               </form>
               <p>
                   By continuing, you agree to amazon's conditions of use and privacy notice, our cookies notice and our intrest-based ads notice. 
               </p>
               <button type="submit" onClick={register} className="login--registerButton">Create your Amazon Account</button>
           </div>
        </div>

    )
}

export default Login

