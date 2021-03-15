const { json } = require('express');
const db =  require('../database/connection');

class TicketsController {
    async create(req, res) {
        const { id } = req.params;

        const user = await db('users').where('id', id).first();

        if (!user) {
            res.json({ message: 'User not found.' });
        } else {
            await db('tickets').insert({
                user_id: id
            })
        } 

        return res.status(201).send();
    }

    async show(req, res) {
        const { id } = req.params;

        const user = await db('users').where('id', id).first();

        if (!user) {
            res.json({ message: 'User not found.' });
        } else {
            const tickets = await db('tickets').where('user_id', id);

            return res.json(tickets);
        } 

        return res.status(201).send();
    }

    async index(req, res) {
        const tickets = await db('tickets');

        return res.json(tickets);
    }

    async count(req, res) {
        const totalTickets = await db('tickets').count('* as total');

        const { total } = totalTickets[0];

        return res.json({ total });
    }
}

module.exports = TicketsController;