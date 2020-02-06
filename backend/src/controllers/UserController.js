const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const user = await User.findAll();

    return res.json(user);
  },

  async store(req, res) {

    const {
      name, email, cpf, city, state, github, birthday 
    } = req.body;

    const user = await User.create({ 
      name, email, cpf, city, state, github, birthday 
    });

    return res.json(user);
  }
}