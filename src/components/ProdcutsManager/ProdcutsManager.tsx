import React, { useContext } from 'react';

import { ProductsContext } from '../../store/products-context';
import ProductsDisplayer from '../ProductsDisplayer/ProductsDisplayer';

const ProdcutsManager: React.FC = () => {
  const productsCtx = useContext(ProductsContext);

  const productsList = productsCtx.products;
  const removeProduct = productsCtx.removeProduct;

  return <ProductsDisplayer products={productsList} removeProduct={removeProduct} />;
};

export default ProdcutsManager;
