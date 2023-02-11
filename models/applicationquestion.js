const Sequelize= require('sequelize');

module.exports = class ApplicationQuestion extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            applicationQuestionId:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            q1:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q2:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q3:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q4:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q5:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q6:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q7:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q8:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q9:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q10:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q11:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q12:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q13:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q14:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q15:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q16:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q17:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q18:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q19:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q20:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q21:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q22:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q23:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },

            q24:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            q25:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            caegory:{
                type: Sequelize.STRING(20),
                allowNull: true,
            }
        },{
            sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'ApplicationQuestion',
			tableName: 'applicationquestions',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
        });
    }
    
}