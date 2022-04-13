import multer from 'multer'
import multerConfig from '../config/multer'
import Foto from '../models/Foto'

const upload = multer(multerConfig).single('foto');

class FotoController {

     store(req, res) { 
        return upload(req, res, async (error) => {

            if (error) {
                return res.status(400).json({
                     errors: [error.code]
                    });
                       }
        try{
            const { originalname, fieldname } = req.file;
            const { aluno_id } = req.body;

            const foto = await Foto.create({originalname, fieldname, aluno_id})
            return res.json(foto);
            
        }catch(err){
            return res.status(400).json({
                    errors: [err.message]
                    ,
                    message: 'Erro ao cadastrar foto, provavelmente o aluno não existe'
            });
        }
        });
    }
}

export default new FotoController();