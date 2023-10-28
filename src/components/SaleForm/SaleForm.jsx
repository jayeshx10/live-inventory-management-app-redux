import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./SaleForm.scss";
import closeIcon from "../../../public/asset/closeIcon.svg";
import { addSale } from "../../actions";

const SaleForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const initialData = {
    productID: "",
    quantity: 0
  };

  const [formData, setFormData] = useState(initialData);

  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      };
    });
  };

  const submitHandler = () => {
    toggleModal();
    dispatch(addSale(formData));
    setFormData(initialData);
  };

  return (
    <div className="sale-form-overlay">
      <div className="sale-form__container">
        <button
          type="button"
          onClick={toggleModal}
          className="sale-form__close-btn"
        >
          <img
            src={closeIcon}
            className="sale-form__close-icon"
            alt="Close Button"
          />
        </button>
        <form className="sale-form">
          <div className="sale-form__input-container">
            <label htmlFor="productID" className="sale-form__labels">
              Product ID:{" "}
            </label>
            <input
              type="text"
              name="productID"
              className="sale-form__inputs"
              placeholder="Product ID"
              value={formData.productID}
              onChange={inputChangeHandler}
              required
            />
          </div>
          <div className="sale-form__input-container">
            <label htmlFor="quantity" className="sale-form__labels">
              Quantity:{" "}
            </label>
            <input
              type="text"
              name="quantity"
              className="sale-form__inputs"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={inputChangeHandler}
              required
            />
          </div>
          <button
            type="submit"
            className="sale-form__submit-btn"
            onClick={submitHandler}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default SaleForm;
