import ClientsModel from '../../../domain/clients/clientsModel';

export default {
  async up() {
    await ClientsModel.bulkCreate(
      [
        {
          id: '0c69e788-2792-4f61-86b1-b2b0ec1c1003',
          name: 'João Renato Nathan Galvão',
          cpf: '586.005.940-06',
        },
        {
          id: 'dc629b79-a05f-4f2c-986f-566e92ced116',
          name: 'Kamilly Alícia Ferreira',
          cpf: '826.608.180-88',
        },
        {
          id: '6d5f9b08-7066-4901-b185-c933b9c7d3b0',
          name: 'Melissa Teresinha Gonçalves',
          cpf: '970.781.934-07',
        },
        {
          id: 'b8d0c84a-e2ab-485f-870d-d5e6dde402e0',
          name: 'Enrico Renan Samuel de Paula',
          cpf: '783.452.007-53',
        },
        {
          id: 'e2b83539-6fba-4543-bfd0-c1bd0e11e5d9',
          name: 'Emanuel Noah Diogo Nascimento',
          cpf: '814.979.665-74',
        },
      ],
      {},
    );
  },

  async down() {
    await ClientsModel.destroy({ truncate: true });
  },
};
