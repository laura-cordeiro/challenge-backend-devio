import ProductsModel from '../../../domain/products/productsModel';

export default {
  async up() {
    await ProductsModel.bulkCreate(
      [
        {
          id: '1bf9855f-6a29-4469-bdf3-e8fbf439c9f',
          name: 'Cheese angus burguer',
          description:
            'Pão de brioche, blend de costela angus de 120g, maionese caseira, queijo prato, cream cheese e cebola caramelizada no açúcar mascavo.',
          unitPrice: 26.0,
        },
        {
          id: '0382f295-8376-43e6-8b68-6a4c9d7ac38',
          name: 'American cheese burguer',
          description:
            'Pão de brioche, blend de costela de angus 120g, creme de queijo de cheddar inglês, cebola crispy e bacon.',
          unitPrice: 31.0,
        },
        {
          id: 'f2d1740b-6336-4bab-969c-98c3ef14d44e',
          name: 'Coca cola',
          description: 'Coca cola lata 350ml',
          unitPrice: 7.0,
        },
        {
          id: 'a7268834-725c-470e-b249-d48892287b05',
          name: 'Batata frita com alcatra',
          description: 'Batata frita, catupiry, cheddar e alcatra.',
          unitPrice: 32.0,
        },
        {
          id: '62ecc754-4e4f-4d8d-a658-2a8a384f111e',
          name: 'Milk shake de chocolate',
          description:
            'Milk shake de chocolate, sorvete de creme e cobertura de oreo.',
          unitPrice: 17.0,
        },
      ],
      {},
    );
  },

  async down() {
    await ProductsModel.destroy({ truncate: true });
  },
};
