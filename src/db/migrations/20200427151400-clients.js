module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: Sequelize.INTEGER,
      cpf: {
        type: Sequelize.STRING,
        unique: true,
      },
      cnpj: {
        type: Sequelize.STRING,
        unique: true,
      },
      company: Sequelize.STRING,
      slug: {
        type: Sequelize.STRING,
        unique: true,
      },
      address: Sequelize.STRING,
      zipcode: Sequelize.STRING,
      city: Sequelize.STRING,
      country: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('clients')
  }
};
