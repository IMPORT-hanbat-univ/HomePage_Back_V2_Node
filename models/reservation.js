const Sequelize= require('sequelize');

module.exports = class Web extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            reservationId:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            date:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            time:{
                type: Sequelize.STRING(20),
                allowNull: false,
            }
        },{
            sequelize,
			timestamps: true,
			underscored: false,
			modelName: 'Reservation',
			tableName: 'reservations',
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
        });
    }
    
}