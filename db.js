const Sequelize = require('sequelize');

const sequelize = new Sequelize('ideias', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate().then(()=> {
    console.log('conexao com banco feita com sucesso')
}).catch(() => {
    console.log('conexao com banco não completada')
});


module.exports = sequelize;