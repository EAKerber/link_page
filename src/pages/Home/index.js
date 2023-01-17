import './home.css'

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
            </main>
        </div>
    )
}

export default Home;