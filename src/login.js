import React from 'react'
import {useHistory} from 'react-router';
import {useState} from 'react'

function Login() {
    const history = useHistory();
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');

    // let [user, setUser] = useState([]);

    const setInputs1 = (e) => {
        return setUserName(e.target.value)
    }

    const setInputs2 = (e) => {
        return setPassword(e.target.value)
    }
    console.log(userName, password);

    // let [isAuth, setIsAuth] = useState(false);
    // let isAuth = false;

    function authentic() {
        if (userName === 'abc' && password === '123') {
            // isAuth = true;
            history.push("/main");
        }
        else {
            alert('please enter the correct credentials (userName: abc, password: 123)');
        }
    }

    return(
        <div className="form w-25 mx-auto mt-5">
            <form>
                <input className="form-control" value={userName} type="text" onChange={setInputs1} placeholder="UserName" />
                <input className="form-control my-2" id="password" type="password" name="password" value={password} placeholder="Password" onChange={setInputs2} />
                <submit type="submit" className="btn btn-outline-danger" id="login" onClick={ () => {
                    authentic();
                    }
                } >Login</submit>
            </form>
        </div>
    )
}

export default Login