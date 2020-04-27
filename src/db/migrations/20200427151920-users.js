module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      phoneNumber: Sequelize.STRING,
      ip: Sequelize.STRING,
      token: Sequelize.STRING,
      clientId: Sequelize.INTEGER,
      role: Sequelize.ENUM('ONNER', 'ADMIN', 'OPERATOR', 'MANAGER', 'ANALYST'),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users')
  }
}
