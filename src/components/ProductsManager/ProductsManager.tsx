import React, { useContext, useState } from 'react';

import { ProductsContext } from '../../store/products-context';
import ProductsDisplayer from '../ProductsDisplayer/ProductsDisplayer';
import EditProduct from '../EditProduct/EditProduct';
import { Product } from '../../models/product';
import classes from './ProductsManager.module.css';

const ProductsManager: React.FC = () => {
  const [editAreaMode, setEditAreaMode] = useState('');
  const [editAreaPayload, setEditAreaPayload] = useState<Product>(new Product('a', 'a', 1, ''));
  const productsCtx = useContext(ProductsContext);

  const productsList = productsCtx.products;
  const removeProductFunc = productsCtx.removeProduct;
  const addProductFunc = productsCtx.addProduct;
  const editProductFunc = productsCtx.editProduct;

  const changeModeToAddModeHandler = () => {
    setEditAreaMode('add');
  };

  const changeModeToEditModeHandler = (product: Product) => {
    setEditAreaMode('edit');
    setEditAreaPayload(product);
  };

  const changeModeToEmptyModeHandler = () => {
    setEditAreaMode('');
    setEditAreaPayload(new Product('a', 'a', 1, ''));
  };

  return (
    <div>
      <div>
        <button onClick={changeModeToAddModeHandler}>Add</button>
      </div>
      <div className={classes['general-display']}>
        <div className={classes['products-displayer']}>
          <ProductsDisplayer
            products={productsList}
            removeProductFunc={removeProductFunc}
            editProductFunc={changeModeToEditModeHandler}
          />
        </div>
        <div className={classes['products-displayer']}>
          {editAreaMode !== '' && (
            <EditProduct
              mode={editAreaMode}
              product={editAreaPayload}
              addProductFunc={addProductFunc}
              closeEditForm={changeModeToEmptyModeHandler}
              editProductFunc={editProductFunc}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsManager;
