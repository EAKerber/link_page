import './adm.css';
import Header from '../../components/Header/index';
import Logo from '../../components/Logo/index';
import Input from '../../components/Input/index';

import { MdLink } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';

import { useState } from 'react';

import { db } from '../../services/firebaseConnection';
import {
    addDoc, collection, onSnapshot,
    query, orderBy, doc, deleteDoc,
} from 'firebase/firestore';

import { toast } from 'react-toastify';

function Adm(){

    const [linkColor, setLinkColor] = useState('#ffd4aa');
    const [linkBackgroundColor, setLinkBackgroundColor] = useState('#e18700');

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    async function handleRegister(e){
        e.preventDefault();

        if(name === '' || url === ''){
            toast.warn('Preencha todos os campos');
            return;
        }

        addDoc(collection(db, 'links'), {
            name:name,
            url:url,
            linkTextColor:linkColor,
            linkBackgroundColor:linkBackgroundColor,
            created: new Date(),
        })
        .then(()=>{
            toast.success(`Link "${name}" adicionado com sucesso`);
            setName('');
            setUrl('');
            setLinkColor('#ffd4aa');
            setLinkBackgroundColor('#e18700');
            console.log('sucess');
        })
        .catch((e)=>{
            console.log(e);
            toast.error("Ops, erro ao salvar o link");
        });

    }

    return(
        <div className="adm-container" >
            <Header/>
            <Logo/>

            <form className='adm-form' onSubmit={handleRegister} >

                <label className='label' >Nome do Link</label>
                <Input
                    placeholder='Nome do link...'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />

                <label className='label' >Url do Link</label>
                <Input
                    placeholder='Url do link...'
                    type='url'
                    value={url}
                    onChange={(e)=>setUrl(e.target.value)}
                />

                <section className='colors-container'>

                    <div className='colors-box'>
                        <label className='label right'>Fundo do link</label>
                        <input
                            className='colors-selector'
                            type='color'
                            value={linkBackgroundColor}
                            onChange={(e)=>setLinkBackgroundColor(e.target.value)}
                        />
                    </div>

                    <div className='colors-box'>
                        <label className='label right'>Cor do link</label>
                        <input
                            className='colors-selector'
                            type='color'
                            value={linkColor}
                            onChange={(e)=>setLinkColor(e.target.value)}
                        />
                    </div>

                </section>

                {name&&
                    <div className='preview' >
                        <label className='label-preview' >Veja como está ficando 👇</label>
                        <article 
                            className='list'
                            style={{backgroundColor: linkBackgroundColor, color: linkColor}} 
                        >
                            <p>{name}</p>
                            <div>
                                <button className='btn-delete'>
                                    <FiTrash2 size={18} color='#fff' />
                                </button>
                            </div>
                        </article>
                    </div>
                }
                <button className='btn-register' type='submit'>
                    Cadastrar <MdLink size={24} color='#fff' />
                </button>

            </form>

            <h2 className='title'>
                Meus Links
            </h2>

            <article 
                className='list animate-pop'
            >
                <p>Grupo telegram</p>
                <div>
                    <button className='btn-delete'>
                        <FiTrash2 size={18} color='#fff' />
                    </button>
                </div>
            </article>

        </div>
    )
}

export default Adm;