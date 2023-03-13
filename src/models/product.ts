class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  creationDate: Date;

  constructor(nameArg: string, descriptionArg: string, priceArg: number, creationDateArg: Date) {
    this.id = Date.now() + Math.random();
    this.name = nameArg;
    this.description = descriptionArg;
    this.price = priceArg;
    this.creationDate = creationDateArg;
  }
}

export default Product;
