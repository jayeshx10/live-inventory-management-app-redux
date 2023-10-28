import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./InventoryForm.scss";
import closeIcon from "../../../public/asset/closeIcon.svg";
import { addItem } from "../../actions";

const InventoryForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const initialFormData = {
    itemName: "",
    itemQuantity: 0,
    itemPrice: 0
  };

  const [formData, setFormData] = useState(initialFormData);

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
    dispatch(addItem(formData));
    setFormData(initialFormData);
  };

  return (
    <div className="inventory-form-overlay">
      <div className="inventory-form__container">
        <button
          type="button"
          onClick={toggleModal}
          className="inventory-form__close-btn"
        >
          <img
            src={closeIcon}
            className="inventory-form__close-icon"
            alt="Close Button"
          />
        </button>
        <form className="inventory-form">
          <div className="inventory-form__input-container">
            <label htmlFor="itemName" className="inventory-form__labels">
              Name:{" "}
            </label>
            <input
              type="text"
              name="itemName"
              className="inventory-form__inputs"
              placeholder="Item name"
              value={formData.itemName}
              onChange={inputChangeHandler}
              required
            />
          </div>
          <div className="inventory-form__input-container">
            <label htmlFor="itemQuantity" className="inventory-form__labels">
              Quantity:{" "}
            </label>
            <input
              type="number"
              name="itemQuantity"
              className="inventory-form__inputs"
              placeholder="Quantity"
              value={formData.itemQuantity}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="inventory-form__input-container">
            <label htmlFor="itemPrice" className="inventory-form__labels">
              Unit Price:{" "}
            </label>
            <input
              type="number"
              name="itemPrice"
              className="inventory-form__inputs"
              placeholder="Unit Price"
              value={formData.itemPrice}
              onChange={inputChangeHandler}
            />
          </div>
        </form>
        <button
          type="submit"
          className="inventory-form__submit-btn"
          onClick={submitHandler}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default InventoryForm;
