import { useEffect } from 'react';

import useInput from '../../hooks/use-input';

import { Product, AddFunction, EditFunction } from '../../models/product';

const NAME_MAX_CHARACTERS = 30;
const DESCRIPTION_MAX_CHARACTERS = 200;

const isNotEmpty = (value: string) => value.trim() !== '';
const noLongerthanNCharacters = (value: string, numOfCharacters: number) =>
  value?.trim().length <= numOfCharacters;

const nameValidityChecker = (value: string) =>
  isNotEmpty(value) && noLongerthanNCharacters(value, NAME_MAX_CHARACTERS);

const descriptionValidityChecker = (value: string) =>
  noLongerthanNCharacters(value, DESCRIPTION_MAX_CHARACTERS);

const priceValidityChecker = (value: string) => +value > 0;

function isValidUrl(value: string) {
  if (value.trim() === '') {
    return true;
  }

  try {
    new URL(value);
    return true;
  } catch (err) {
    return false;
  }
}

const EditProduct: React.FC<{
  mode: string;
  addProductFunc: AddFunction;
  closeEditForm: () => void;
  editProductFunc: EditFunction;
  product: Product;
}> = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetname,
  } = useInput(nameValidityChecker);

  const {
    value: descriptionValue,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescription,
  } = useInput(descriptionValidityChecker);

  const {
    value: priceValue,
    isValid: priceIsValid,
    hasError: priceHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPrice,
  } = useInput(priceValidityChecker);

  const {
    value: imageURLValue,
    isValid: imageURLIsValid,
    hasError: imageURLHasError,
    valueChangeHandler: imageURLChangeHandler,
    inputBlurHandler: imageURLBlurHandler,
    reset: resetImageURL,
  } = useInput(isValidUrl);

  useEffect(() => {
    console.log('props.mode :>> ', props.mode);
    if (props.mode === 'edit') {
      nameChangeHandler({ target: { value: props.product?.name } }); //event.target.value
      descriptionChangeHandler({ target: { value: props.product?.description } }); //event.target.value
      priceChangeHandler({ target: { value: props.product?.price } }); //event.target.value
      imageURLChangeHandler({ target: { value: props.product?.imageURL } }); //event.target.value
    }
  }, [props.product]);

  let formIsValid = false;

  if (nameIsValid && descriptionIsValid && priceIsValid && imageURLIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    if (props.mode === 'add') {
      props.addProductFunc(nameValue, descriptionValue, priceValue, imageURLValue);
      props.closeEditForm();
    }

    if (props.mode === 'edit') {
      props.editProductFunc(
        props.product?.id,
        nameValue,
        descriptionValue,
        priceValue,
        imageURLValue
      );
      props.closeEditForm();
    }

    // resetname();
    // resetDescription();
    // resetPrice();
    // resetImageURL();
  };

  const nameClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const descriptionClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const priceClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const imageURLClasses = imageURLHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className="error-text">
              {`Please enter a name and it must be no longer than ${NAME_MAX_CHARACTERS} characters`}
            </p>
          )}
        </div>
        <div className={descriptionClasses}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows={+'3'}
            value={descriptionValue}
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
          />
          {descriptionHasError && (
            <p className="error-text">
              {`The Description must be no longer than ${DESCRIPTION_MAX_CHARACTERS} characters`}
            </p>
          )}
        </div>
        <div className={priceClasses}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            min="0"
            step="any"
            value={priceValue}
            onChange={priceChangeHandler}
            onBlur={priceBlurHandler}
          />
          {priceHasError && (
            <p className="error-text">{`Please enter a price greater than zero`}</p>
          )}
        </div>
        <div className={imageURLClasses}>
          <label htmlFor="imageURL">Image URL</label>
          <input
            type="text"
            id="imageURL"
            value={imageURLValue}
            onChange={imageURLChangeHandler}
            onBlur={imageURLBlurHandler}
          />
          {imageURLHasError && <p className="error-text">Please enter a valid url address</p>}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Save</button>
      </div>
    </form>
  );
};

export default EditProduct;
