import './logo.css'

import { Link } from 'react-router-dom';

function Logo(){
    return(
        <Link to="/">
            <h1 className='logo' >Link<span className='logo-text'>Page</span> </h1>
        </Link>
    )
}

export default Logo;