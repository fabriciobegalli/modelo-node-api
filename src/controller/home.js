const Usuario = require('@models/usuario');
const lang = require('@lang/');
const say = require('@helpers/say');

const HomeController = {
  helloWorld(req, res) {
    res.send(say(lang.server.hello, { data: new Date() }));
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
