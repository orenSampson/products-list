import React from 'react';

import Product from '../models/product';

interface ProductsContextObj {
  products: Product[];
}

const ProductsContext = React.createContext<ProductsContextObj>({
  products: [],
});

const ProductsContextProvider: React.FC<PropsChildren> = (props) => {
  const [products, setProducts] = React.useState<Product[]>([
    new Product('Magazine', 'A beautiful magazine', 100, new Date()),
    new Product('Toothpaste', 'A tooth whitener', 5, new Date('2015-03-25')),
    new Product('hamburger', 'A juicy yummy burger', 20, new Date('2018-12-28')),
    new Product('lollipop', 'CHUPA CHUPS LOLLIPOP', 2, new Date('2022-01-05')),
    new Product('shampoo', 'head and shoulders shampoo', 7, new Date('2020-07-09')),
  ]);

  const contextValue: ProductsContextObj = {
    products,
  };

  return <ProductsContext.Provider value={contextValue}>{props.children}</ProductsContext.Provider>;
};
