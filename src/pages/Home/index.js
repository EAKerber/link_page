import './home.css';
import SocialMedia from '../../components/SocialMedia';

import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';

function Home(){
    return(
        <div className='home-container'>
            <h1>Eduardo</h1>
            <span>Meus links 👇</span>

            <main className='links-main'>
                <section className='link-container'>
                    <a href='#'>
                        <p className='link-text'>Youtube</p>
                    </a>
                </section>
                <section className='link-container'>
                    <a href='#'>
                        <p className='link-text'>Twitter</p>
                    </a>
                </section>
                <section className='link-container'>
                    <a href='#'>
                        <p className='link-text'>Twitch</p>
                    </a>
                </section>
                <section className='link-container'>
                    <a href='#'>
                        <p className='link-text'>koo</p>
                    </a>
                </section>
                
                <footer>
                    <SocialMedia url='https://facebook.com' >
                        <FaFacebook size={35} color='#fff' />
                    </SocialMedia>
                    <SocialMedia url='https://youtube.com' >
                        <FaYoutube size={35} color='#fff' />
                    </SocialMedia>
                    <SocialMedia url='https://instagram.com' >
                        <FaInstagram size={35} color='#fff' />
                    </SocialMedia>

                </footer>

            </main>
        </div>
    )
}

export default Home;