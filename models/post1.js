const Sequelize= require('sequelize');

module.exports = class Web extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            postId:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            category:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            num:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            postTitle:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            main:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            postTime:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            Field:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            delete:{
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
			modelName: 'Post1',
			tableName: 'posts1',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
        });
    }
    
}