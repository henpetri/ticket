const db =  require('../database/connection');

class UsersController {
    async create(req, res) {
        const {
            name,
            email
        } = req.body;

        await db('users').insert({
            name,
            email
        });

        return res.status(201).send();
    }
}

module.exports = UsersController;