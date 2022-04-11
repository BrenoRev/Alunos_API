import Sequelize from 'sequelize'
import databaseConfig from '../config/database';
import Alunos from '../models/Aluno';
import User from '../models/User';

const models = [Alunos, User];

const connection = new Sequelize(databaseConfig);

models.forEach( model => model.init(connection));