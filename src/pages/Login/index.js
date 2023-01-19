import './login.css';
import Logo from '../../components/Logo';
import { useState } from 'react';

import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

function Login(){
    
    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');

    const navigator = useNavigate()

    function handleLogin(e){
        e.preventDefault();
        if(email==='' || password===''){
            alert('Preencha todos os campos!');
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            toast.success("Bem Vindo de volta :^)");
            navigator('/adm', {replace: true});
        })
        .catch((e)=>{
            toast.error("Erro ao tentar fazer o login!");
            console.log(e);
        });
    }

    return(
        <div className="login-container">
            <Logo/>

            <form className='form' onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder='Digite seu Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Digite sua Senha'
                    autoComplete='on'
                    value={password}
                    onChange={(e)=>setPassoword(e.target.value)}
                />
                <button type='submit' >Acessar</button>
            </form>
             
        </div>
    )
}

export default Login;