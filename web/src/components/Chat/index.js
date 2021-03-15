import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

const Chat = (props) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function loadMessages() {
            const res = await api.get(`talk/${props.id}`);

            setMessages(res.data)
        }

        loadMessages();
    }, [messages]);

    function handleSendMsg(e) {
        e.preventDefault();

        api.post('/ticket/1/admin',{
            message,
        });

        setMessage('');
    }

    return(
        <main className="content">
            <Link to={props.back}>
                <button className="btn-back">Voltar</button>
            </Link>
  
            <div className="chat">
                <div className="messages">
                    {messages.map(messages => (
                        <p className={props.styles}>{messages.message}</p>
                    ))}
                </div>

                <form onSubmit={handleSendMsg} className="submit-message">
                    <textarea 
                        name="message"
                        type="text" 
                        maxLength="250"
                        required
                        rows="3" cols="100" 
                        autoFocus 
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <button className="btn-submit" type="submit">Enviar</button>
                </form>
            </div>
        </main>
    )
}

export default Chat;