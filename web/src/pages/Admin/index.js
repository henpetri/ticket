import React, { useEffect, useState } from 'react';

import Ticket from '../../components/Ticket';

import api from '../../services/api';

import './styles.css';

function Admin() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        async function loadTickets() {
            const res = await api.get('tickets');

            setTickets(res.data);
        }

        loadTickets();
    }, [tickets]);

    return(
        <main className="cnt-tickets">
            <h3>Área de administração. Abaixo estará visível todos os tickets que foram abertos no site.</h3>

            <div className="tickets-view">

                {tickets.map(tickets => (
                        <Ticket
                            key={tickets.id}
                            id={tickets.id}
                            created_at={tickets.created_at}
                            go={`admin/chat/${tickets.id}`}
                        />
                ))}
            </div>
        </main>
    )
}

export default Admin;