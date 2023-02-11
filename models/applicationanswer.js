const Sequelize= require('sequelize');

module.exports = class ApplicationAnswer extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            applicationQuestionId:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            answer1:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer2:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer3:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer4:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer5:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer6:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer7:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer8:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer9:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer10:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer11:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer12:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer13:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer14:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer15:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer16:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer17:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer18:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer19:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer20:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer21:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer22:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer23:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer24:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            answer25:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            userId:{
                type: Sequelize.STRING(20),
                allowNull: false,
            }
        },{
            sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'ApplicationAnswer',
			tableName: 'applicationanswers',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
        });
    }
    
}