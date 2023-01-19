import './social.css'

function SocialMedia({url, children}){
    return(
        <a className='social-icon' href={url} target='_blank' rel='noopener noreferrer'>
            {children}
        </a>
    )
}

export default SocialMedia;