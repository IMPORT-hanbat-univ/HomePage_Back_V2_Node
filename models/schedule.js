const Sequelize= require('sequelize');

module.exports = class Schedule extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            scheduleId:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            date:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            time:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            id:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            userid:{
                type: Sequelize.STRING(20),
                allowNull: false,
            }
        },{
            sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'Schedule',
			tableName: 'schedules',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
        });
    }
    
}