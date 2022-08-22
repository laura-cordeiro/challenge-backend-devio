import app from './config/server';
import sequelize from './infrastructure/database';

const startServer = async () => {
  try {
    await sequelize.authenticate();
    // eslint-disable-next-line no-console
    app.listen(3000, () => console.log('Servidor rodando na porta 3000!'));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Erro:', error);
  }
};

startServer();
