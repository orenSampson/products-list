import { PropsWithChildren } from '../../models/product';
import { Product, RemoveFunction } from '../../models/product';
import SingleProduct from '../SingleProduct/SingleProduct';

const ProductsDisplayer: React.FC<
  PropsWithChildren<{ products: Product[]; removeProduct: RemoveFunction }>
> = (props) => {
  console.log('props.removeProduct :>> ', props.removeProduct);
  return (
    <ul>
      {props.products.map((product) => {
        return (
          <SingleProduct key={product.id} product={product} removeProduct={props.removeProduct} />
        );
      })}
    </ul>
  );
};

export default ProductsDisplayer;
