const Sequelize= require('sequelize');

module.exports = class Web extends Sequelize.Model{
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