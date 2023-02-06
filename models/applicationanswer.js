const Sequelize= require('sequelize');

module.exports = class Web extends Sequelize.Model{
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