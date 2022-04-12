import User from '../models/User';
class UserController {

    async store(req, res) {
        try{
            const novoUser = await User.create(req.body);
            const { id, nome, email } = novoUser;
            res.json({ id, nome, email });
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
            const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
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
            const user = await User.findByPk(req.params.id, { attributes: ['id', 'nome', 'email'] });
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
            const user = await User.findByPk(req.userId);
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
            const user = await User.findByPk(req.userId);

            if(!user) {
                return res.status(400).json({
                    errors: ['Usuário não encontrado']
                });
            }

            await user.destroy();
            return res.json(null)
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