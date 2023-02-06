const Sequelize= require('sequelize');

module.exports = class Web extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            projectId:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            Title:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            Field2:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            postTime:{
                type: Sequelize.DATE,
                allowNull: true,
            },
            file:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            delete:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            tag1:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            tag2:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            tag3:{
                type: Sequelize.STRING(20),
                allowNull: true,
            }
        },{
            sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'Project',
			tableName: 'projects',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
        });
    }
    
}