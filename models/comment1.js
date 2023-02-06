const Sequelize= require('sequelize');

module.exports = class Web extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            commentId:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            postId:{
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            main:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            parentId:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            postTime:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            delete:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            Field:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            Field2:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            Field3:{
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
			modelName: 'Comment1',
			tableName: 'comments1',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
        });
    }
    
}