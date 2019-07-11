const Usuario = require('@models/usuario');

const HomeController = {
  helloWorld(req, res) {
    res.send(`Hello, World ${new Date()}`);
  },
  helloErro(req, res) {
    res.sendError('OPS... teste exception', 500);
  },
  createUser(req, res) {
    const { nome, email, idade } = req.body;

    const user = new Usuario({ nome, email, idade });

    user.save((err, user) => {
      if (err) {
        return res.status(500).send({ message: 'erro' });
      }

      res.send(user);
    });
  },
};

module.exports = HomeController;
