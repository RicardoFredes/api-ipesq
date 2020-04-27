const Model = require('./Model')

module.exports = class UserModel extends Model {
  constructor() {
    super('users', getModelSchema)
  }
}

function getModelSchema(Schema) {
  return { 
    id: {
      type: Schema.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Schema.STRING,
    },
    email: {
      type: Schema.STRING,
      unique: true,
      allowNull: false,
    },
    phoneNumber: {
      type: Schema.STRING,
    },
    ip: {
      type: Schema.STRING,
    },
    token: {
      type: Schema.STRING,
    },
    clientId: {
      type: Schema.INTEGER,
    },
    role: {
      type: Schema.ENUM('ONNER', 'ADMIN', 'OPERATOR', 'MANAGER', 'ANALYST')
    },
  }
}
