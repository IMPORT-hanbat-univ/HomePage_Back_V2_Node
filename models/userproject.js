const Sequelize= require('sequelize');

module.exports = class Web extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            projectId:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            id:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            userId:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            rank:{
                type: Sequelize.STRING(20),
                allowNull: true,
            }
        },{
            sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'UserProject',
			tableName: 'userprojects',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
        });
    }
    
}