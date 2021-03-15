import React, { useEffect, useState } from 'react';

import Ticket from '../../components/Ticket'

import api from '../../services/api';

import './styles.css';

function Logged() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        async function loadTickets() {
            const res = await api.get('tickets/1');

            setTickets(res.data);
        }

        loadTickets();
    }, [tickets]);

    async function handleCreateTicket() {
        await api.post('tickets/1');

        alert('Você criou um novo ticket');
    }

    return(
        <main className="cnt-tickets">
            <h3>Olá, Usuário. Abaixo estará visível todos os tickets que foram abertos.</h3>
            <button className="open-talk ticket" onClick={() => handleCreateTicket()}>Abrir ticket</button>

            <div className="tickets-view">

                {tickets.map(tickets => (
                        <Ticket
                            key={tickets.id}
                            id={tickets.id}
                            created_at={tickets.created_at}
                            go={`logged/chat/${tickets.id}`}
                        />
                ))}
            </div>
            
        </main>
    )
}

export default Logged;