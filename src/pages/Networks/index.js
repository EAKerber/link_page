import './networks.css'
import Header from '../../components/Header/index';
import Input from '../../components/Input/index'

import { MdAddLink } from 'react-icons/md'

import { toast } from 'react-toastify'

import { useState, useEffect } from 'react';

import { db } from '../../services/firebaseConnection';
import {
    setDoc, doc,
    getDoc,
} from 'firebase/firestore';

function Networks() {

    const [facebookLink, setFacebookLink] = useState('');
    const [instagramLink, setInstagramLink] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');

    useEffect(()=>{
        async function loadLinks(){
            const docRef = doc(db, 'social', 'link');
            await getDoc(docRef)
            .then((snapshot)=>{
                if(snapshot.data() !== undefined){
                    setFacebookLink(snapshot.data().facebook);
                    setInstagramLink(snapshot.data().instagram);
                    setYoutubeLink(snapshot.data().youtube);
                }
            })
            .catch((e)=>{
                console.log(e);
                toast.error("Ops, erro ao buscar links");
            });
        }

        loadLinks();
    }, []);

    async function handleSave(e){
        e.preventDefault();
        await setDoc(doc(db, 'social', 'link'), {
            facebook: facebookLink,
            instagram: instagramLink,
            youtube: youtubeLink,
        }).then(()=>{
            toast.success(`Links salvos com sucesso`);
        })
        .catch((e)=>{
            console.log(e);
            toast.error("Ops, erro ao salvar os links");
        });
    }

    return (
        <div className='adm-container'>
            <Header />
            <h1 className='title-social'>Suas redes sociais</h1>

            <form className='adm-form' onSubmit={handleSave}>

                <label className='label'>Link do facebook</label>

                <Input
                    placeholder='Digite a url do facebook...'
                    value={facebookLink}
                    onChange={(e)=>setFacebookLink(e.target.value)}
                    type='url'
                />

                <label className='label'>Link do instagram</label>

                <Input
                    placeholder='Digite a url do instagram...'
                    value={instagramLink}
                    onChange={(e)=>setInstagramLink(e.target.value)}
                    type='url'
                /> 

                <label className='label'>Link do youtube</label>

                <Input
                    placeholder='Digite a url do youtube...'
                    value={youtubeLink}
                    onChange={(e)=>setYoutubeLink(e.target.value)}
                    type='url'
                />

                <button type='submit' className='btn-register'>
                    Salvar Links <MdAddLink size={24} color='#fff'/>
                </button>

            </form>
        </div>
    );
}

export default Networks;