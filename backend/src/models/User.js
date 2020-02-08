const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      github: DataTypes.STRING,
      birthdate: DataTypes.DATE,
    }, {
      sequelize
    });
  }
}

module.exports = User;