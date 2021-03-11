const db =  require('../database/connection');

class MessagesController {
    async sendMsgUser(req, res) {
        const { id } = req.params;

        const {
            message
        } = req.body;

        await db('messages').insert({
            message,
            admin: false,
            ticket_id: id
        });

        return res.status(201).send();
    }

    async sendMsgAdmin(req, res) {
        const { id } = req.params;

        const {
            message
        } = req.body;

        await db('messages').insert({
            message,
            admin: true,
            ticket_id: id
        });

        return res.status(201).send();
    }

    async show(req, res) {
        const { id } = req.params;

        const talk = await db('messages').where('ticket_id', id);

        return res.json(talk);
    }

}

module.exports = MessagesController;