import './home.css';
import SocialMedia from '../../components/SocialMedia';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { useState, useEffect } from 'react';

import { db } from '../../services/firebaseConnection';
import {
    getDocs, collection,
    orderBy, query, doc,
    getDoc,
} from 'firebase/firestore';

function Home() {

    const [links, setLinks] = useState([]);
    const [socialLinks, setSocialLinks] = useState({});

    useEffect(() => {
        async function loadLinks() {
            const linsksRef = collection(db, 'links');
            const queryRef = query(linsksRef, orderBy('created', 'asc'));

            await getDocs(queryRef)
                .then((snapshot) => {
                    let lista = [];
                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            name: doc.data().name,
                            url: doc.data().url,
                            backgroundColor: doc.data().linkBackgroundColor,
                            textColor: doc.data().linkTextColor,
                        });
                    });
                    setLinks(lista);
                })
                .catch((e) => {
                    console.log(e);
                    toast.error("Ops, erro ao buscar links");
                });
        }

        loadLinks();
    }, []);

    useEffect(() => {
        async function loadSocial() {
            const docRef = doc(db, 'social', 'link');

            await getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() !== undefined) {
                        let data = {
                            facebook: snapshot.data().facebook,
                            instagram: snapshot.data().instagram,
                            youtube: snapshot.data().youtube,
                        }
                        setSocialLinks(data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                    toast.error("Ops, erro ao buscar links sociais");
                });
        }

        loadSocial();
    }, []);

    return (
        <div className='home-container'>
            <h1>Eduardo</h1>
            <span>Meus links 👇</span>

            <main className='links-main'>
                {
                    links.map((link) => {
                        return (
                            <section
                                className='link-container' key={link.id}
                                style={{ backgroundColor: link.backgroundColor }}
                            >
                                <a
                                    href={link.url} target='_blank' rel='noopener noreferrer'
                                >
                                    <p
                                        className='link-text' style={{ color: link.textColor }}
                                    >
                                        {link.name}
                                    </p>
                                </a>
                            </section>
                        )
                    })
                }

                {(links.length > 0 && Object.keys(socialLinks).length > 0) &&
                    <footer>
                        <SocialMedia url={socialLinks?.facebook} >
                            <FaFacebook size={35} color='#fff' />
                        </SocialMedia>
                        <SocialMedia url={socialLinks?.youtube} >
                            <FaYoutube size={35} color='#fff' />
                        </SocialMedia>
                        <SocialMedia url={socialLinks?.instagram} >
                            <FaInstagram size={35} color='#fff' />
                        </SocialMedia>
                    </footer>
                }

            </main>
        </div>
    )
}

export default Home;