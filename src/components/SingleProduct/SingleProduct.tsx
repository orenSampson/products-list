import { Product, RemoveFunction } from '../../models/product';

const SingleProduct: React.FC<{ product: Product; removeProduct: RemoveFunction }> = (props) => {
  return (
    <div>
      <li>
        {props.product.id} {props.product.name}
      </li>
      <button onClick={props.removeProduct.bind(null, props.product.id)}>remove</button>
    </div>
  );
};

export default SingleProduct;
