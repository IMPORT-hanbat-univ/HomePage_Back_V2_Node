const Sequelize= require('sequelize');

module.exports = class CludUser extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            userId:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            department:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            grade:{
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            blog:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            StudentId:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            framework:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            language:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            phoneNumber:{
                type: Sequelize.STRING(20),
                allowNull: true,
            }
        },{
            sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'CludUser',
			tableName: 'cludusers',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
        });
    }
    
}