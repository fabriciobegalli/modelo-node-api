const app = require('@app');
const config = require('@config');
const lang = require('@lang');
const say = require('@helpers/say');

module.exports = (err) => {
  console.clear();

  if (err) {
    console.log('Erro ao conectar DB');
    console.log(err);
  } else {
    const port = config.app.port || 5000;

    app.listen(port, (err) => {
      if (err) {
        say(lang.server.error, { error: err.message });
      }

      say(lang.server.started, { port });
      console.log(`http://localhost:${config.app.port}/`);
    });
  }
};
