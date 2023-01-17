import './page404.css';
import {Link} from 'react-router-dom';

import Logo from '../../components/Logo';

function Page404(){
    return(
        <div className='error'>
            <Logo/>
            <h1>Erro 404</h1>
            <p>A página requisitada não foi encontrada ou não existe</p>
            
            <Link className='link' to='/'>
                Voltar para página inicial
            </Link>
        </div>
    )
}

export default Page404;