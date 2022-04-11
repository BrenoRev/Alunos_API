import User from '../models/User';
class UserController {

    async store(req, res) {
        try{
            const novoUser = await User.create(req.body);
            res.json(novoUser)
        } catch(e) {
            res.status(400).json(
                { 
                  errors:  e.errors.map(error => error.message)
                }
                )
        }
     
    }

    async index(req, res) {
        try{
            const users = await User.findAll();
            return res.json(users)
        } catch(e) {
           return res.status(400).json(
                { 
                  errors:  e.errors.map(error => error.message)
                }
                )
        }
    }

    async show(req, res) {
        try{
            const user = await User.findByPk(req.params.id);
            return res.json(user)
        } catch(e){
            return res.status(400).json(
                { 
                  errors:  e.errors.map(error => error.message)
                }
                )
        }
    }

    async update(req, res) {
        try{
            const user = await User.findByPk(req.params.id);
            await user.update(req.body);
            return res.json(user)
        } catch(e) {
            return res.status(400).json(
                { 
                  errors:  e.errors.map(error => error.message)
                }
                )
        }

    }

    async destroy(req, res) {
        try{
            const user = await User.findByPk(req.params.id);
            await user.destroy();
            return res.json(user)
        } catch(e) {
            return res.status(400).json(
                { 
                  errors:  e.errors.map(error => error.message)
                }
                )
        }
    }

}

export default new UserController();