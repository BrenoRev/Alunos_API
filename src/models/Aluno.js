import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
    static init(sequelize) {
        super.init(
        {
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'O nome deve ter entre 3 e 255 caracteres.'
                    }
                }
            },
            sobrenome:{
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'O sobrenome deve ter entre 3 e 255 caracteres.'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    args: true,
                    msg: 'E-mail já cadastrado.'
                },
                validate: {
                    isEmail: {
                        msg: 'O email inválido.'
                    }
                }
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: 'Idade precisa um número inteiro.'
                    }
                }
            },
            peso: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'O peso precisa ser um número inteiro ou decimal.'
                    }
                }
            },
            altura: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'A altura precisa ser um número inteiro ou decimal.'
                    }
                }
            },
        },

        {
            sequelize,
        });
    
        return this;
    }

    static associate(models) {
        this.hasMany(models.Foto, { foreignKey: 'aluno_id'});
    }
}