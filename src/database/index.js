import Sequelize from 'sequelize'
import databaseConfig from '../config/database';
import Alunos from '../models/Aluno';

const models = [Alunos];

const connection = new Sequelize(databaseConfig);

models.forEach( model => model.init(connection));