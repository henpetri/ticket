const db =  require('../database/connection');

class UsersController {
    async create(req, res) {
        const {
            name,
            email
        } = req.body;

        const user = await db('users').where('email', email).first();

        if(!user) {
            await db('users').insert({
                name,
                email
            });
        }
        
        const userDT = await db.select('*').from('users').where('email', email);

        return res.json(userDT).status(201).send();
    }
}

module.exports = UsersController;