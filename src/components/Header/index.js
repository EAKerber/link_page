import './header.css';

import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection'

async function handleLogout(){
    await signOut(auth).catch((e)=>{
        console.log(e);
    });
}

function Header(){
    return(
        <header className='header-container' >
            <nav className='header-nav'>
                <button
                    onClick={handleLogout}
                >
                    <BiLogOut size={28} color='#db2629'/>
                </button>

                <Link to='/adm'>
                    Links
                </Link>
                <Link to='/adm/social'>
                    Redes Sociais
                </Link>
            </nav>
        </header>
    )
}

export default Header;