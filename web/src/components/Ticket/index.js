import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Ticket = (props) => {
    return(
        <div className="content-tickets">
            <div className="tickets">
                <span>ID do ticket: {props.id}</span>
                <span>Criado em: {props.created_at}</span>
                <Link to={props.go}>
                    <button className="open-talk">Visualizar</button>
                </Link>
            </div>
        </div>
    )
}

export default Ticket;