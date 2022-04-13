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
            console.log(originalname);
            console.log(fieldname);
            const { aluno_id } = req.body;
            console.log(aluno_id)

            const foto = await Foto.create({originalname, fieldname, aluno_id})
            console.log(foto);
            return res.json(foto);
        }catch(err){
            return res.status(400).json({
                    errors: [err.message]
            });
        }
        });
    }
}

export default new FotoController();