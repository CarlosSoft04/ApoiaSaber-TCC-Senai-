const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u721539099_agendaescola', 'u721539099_user', 'L7OWWJ@9m', {
    host: '193.203.175.84',
    dialect: 'mysql',
    port: 3306,
    logging: false,
});

sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso!'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

module.exports = sequelize;
