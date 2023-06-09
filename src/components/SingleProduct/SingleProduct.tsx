import { Product, RemoveFunction, EditFunction } from '../../models/product';
import classes from './SingleProduct.module.css';

const SingleProduct: React.FC<{
  product: Product;
  removeProductFunc: RemoveFunction;
  editProductFunc: (product: Product) => void;
}> = (props) => {
  const clickHandler = () => {
    props.editProductFunc(props.product);
  };

  return (
    <div className={classes['single-product']} onClick={clickHandler}>
      <img className={classes['img-size']} src={props.product.imageURL} alt="" />
      <p>name: {props.product.name}</p>
      <p>description: {props.product.description}</p>
      <p>price: {props.product.price}$</p>

      <button onClick={props.removeProductFunc.bind(null, props.product.id)}>remove</button>
    </div>
  );
};

export default SingleProduct;
