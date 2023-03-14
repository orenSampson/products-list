export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  creationDate: Date;
  imageURL: string;

  constructor(nameArg: string, descriptionArg: string, priceArg: number, imageURLArg: string) {
    this.id = Date.now() + Math.random();
    this.name = nameArg;
    this.description = descriptionArg;
    this.price = priceArg;
    this.creationDate = new Date();
    this.imageURL = imageURLArg;
  }
}

export type RemoveFunction = (productID: number) => void;

export type AddFunction = (
  name: string,
  description: string,
  price: number,
  imageURL: string
) => void;

export type EditFunction = (
  id: number,
  name: string,
  description: string,
  price: number,
  imageURL: string
) => void;

export type PropsWithChildren<P> = P & { children?: React.ReactNode };
