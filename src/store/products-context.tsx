import React from 'react';

import {
  Product,
  PropsWithChildren,
  RemoveFunction,
  AddFunction,
  EditFunction,
} from '../models/product';

interface ProductsContextObj {
  products: Product[];
  removeProduct: RemoveFunction;
  addProduct: AddFunction;
  editProduct: EditFunction;
}

export const ProductsContext = React.createContext<ProductsContextObj>({
  products: [],
  removeProduct: (productID: number) => {},
  addProduct: (name: string, description: string, price: number, imageURL: string) => {},
  editProduct: (
    id: number,
    name: string,
    description: string,
    price: number,
    imageURL: string
  ) => {},
});

const ProductsContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [products, setProducts] = React.useState<Product[]>([
    new Product(
      'Magazine',
      'A beautiful magazine',
      100,
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&w=1000&q=80'
    ),
    new Product(
      'Toothpaste',
      'A tooth whitener',
      5,
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&w=1000&q=80'
    ),
    new Product(
      'hamburger',
      'A juicy yummy burger',
      20,
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&w=1000&q=80'
    ),
    new Product(
      'lollipop',
      'CHUPA CHUPS LOLLIPOP',
      2,
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&w=1000&q=80'
    ),
    new Product(
      'shampoo',
      'head and shoulders shampoo',
      7,
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&w=1000&q=80'
    ),
  ]);

  const removeProductHandler: RemoveFunction = (productID: number) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== productID);
    });
  };

  const addProductHandler: AddFunction = (
    name: string,
    description: string,
    price: number,
    imageURL: string
  ) => {
    setProducts((prevProducts) => {
      return [...prevProducts, new Product(name, description, price, imageURL)];
    });
  };

  const editProductHandler: EditFunction = (
    id: number,
    name: string,
    description: string,
    price: number,
    imageURL: string
  ) => {
    setProducts((prevProducts) => {
      const index = prevProducts.findIndex((product) => {
        return product.id === id;
      });

      if (index !== -1) {
        prevProducts[index].name = name;
        prevProducts[index].description = description;
        prevProducts[index].price = price;
        prevProducts[index].imageURL = imageURL;
      }

      return prevProducts;
    });
  };

  const contextValue: ProductsContextObj = {
    products,
    removeProduct: removeProductHandler,
    addProduct: addProductHandler,
    editProduct: editProductHandler,
  };

  return <ProductsContext.Provider value={contextValue}>{props.children}</ProductsContext.Provider>;
};

export default ProductsContextProvider;
