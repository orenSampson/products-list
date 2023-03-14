import { PropsWithChildren } from '../../models/product';
import { Product, RemoveFunction, EditFunction } from '../../models/product';
import SingleProduct from '../SingleProduct/SingleProduct';

const ProductsDisplayer: React.FC<
  PropsWithChildren<{
    products: Product[];
    removeProductFunc: RemoveFunction;
    editProductFunc: (product: Product) => void;
  }>
> = (props) => {
  return (
    <ul>
      {props.products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            product={product}
            removeProductFunc={props.removeProductFunc}
            editProductFunc={props.editProductFunc}
          />
        );
      })}
    </ul>
  );
};

export default ProductsDisplayer;
