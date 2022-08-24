import app from './config/server';
import sequelize from './infrastructure/database';

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    // eslint-disable-next-line no-console
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}! `));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Erro:', error);
  }
};

startServer();
