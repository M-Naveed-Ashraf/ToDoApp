import React from 'react'
import {useHistory} from 'react-router';
import {useState} from 'react'

function Login() {
    const history = useHistory();
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');

    let [user, setUser] = useState([]);

    const setInputs1 = (e) => {
        return setUserName(e.target.value)
    }

    const setInputs2 = (e) => {
        return setPassword(e.target.value)
    }
    console.log(userName, password);

    let [isAuth, setIsAuth] = useState(false);

    const authentic = () => {
        if(userName === 'abc' && password === '123') {
            isAuth = true
        }
    }

    return(
        <div className="form w-25 mx-auto mt-5">
            <input className="form-control" value={userName} type="text" onChange={setInputs1} placeholder="UserName" />
            <input className="form-control my-2" type="password" name="password" value={password} placeholder="Password" onChange={setInputs2} />
            <submit type="submit" className="btn btn-outline-danger" onClick={ () => {
                authentic();
                if(isAuth) {
                    history.push("/main");
                }
                else {
                    alert('please enter the correct credentials (userName: abc, password: 123)');
                }
                }
            } >Login</submit>
        </div>
    )
}

export default Login