import { faker } from '@faker-js/faker';
import { addProduct, products } from './products/product.service';


for (let index = 0; index < 50; index++) {

  addProduct({
    // id: faker.datatype.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['M', 'S', 'XL']),
    title: faker.commerce.productName(),
    size: faker.helpers.arrayElement(['S', 'M']),
    // createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
    // category: {
    //   id: faker.datatype.uuid(),
    //   name: faker.commerce.department(),
    //   createdAt: faker.date.recent(),
    //   updatedAt: faker.date.recent(),
    // }
  });

}

console.log(products);

const product = products[0];