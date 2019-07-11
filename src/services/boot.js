const app = require('@app');
const config = require('@config');

module.exports = (err) => {
  console.clear();

  if (err) {
    console.log('Erro ao conectar DB');
    console.log(err);
  } else {
    app.listen(config.app.port, (err) => {
      if (err) {
        return console.log(err);
      }

      console.log(`Start ON: http://localhost:${config.app.port}/`);
    });
  }
};
