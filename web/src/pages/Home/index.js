import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api'

function Home() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [totalTickets, setTotalTickets] = useState(0);

    useEffect(() => {
        api.get('tickets/all').then(res => {
            const { total } = res.data;

            setTotalTickets(total);
        })
    }, [])


    function handleLogin(e) {
        e.preventDefault();

        api.post('users',{
            name,
            email
        });
    }

    return(
        <main>
            <h3>Logue para abrir tickets ou visualizar os que já foram criados.</h3>

            <form onSubmit={handleLogin}>

                <input 
                    type="text" 
                    placeholder="Nome"
                    name="name" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />

                <input 
                    type="email" 
                    placeholder="E-mail" 
                    name="email" 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />

                <button type="submit">Entrar</button>

            </form>

            <h4>{totalTickets} tickets já foram abertos no site.</h4>
        </main>
    )
}

export default Home;