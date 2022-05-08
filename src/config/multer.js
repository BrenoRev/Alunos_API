import multer from 'multer'
import { MulterError } from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000 );

export default {
    fileFilter: (req, file, cb) => {
        const ext = extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return cb(new MulterError('Somente imagens são permitidas'));
        }
        return cb(null, true);
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, '..', '..', 'uploads'))
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
        }
    })
}