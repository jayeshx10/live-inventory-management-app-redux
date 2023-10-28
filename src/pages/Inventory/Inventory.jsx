import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Inventory.scss";
import { fetchAllItems, deleteItem } from "../../actions";
import addIcon from "../../../public/asset/addIcon.svg";
import closeIcon from "../../../public/asset/closeIcon.svg";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

const Inventory = () => {
  const dispatch = useDispatch();
  const allItems = useSelector((state) => state.inventory);

  const [showInventoryForm, setShowInventoryForm] = useState(false);
  const toggleForm = () => setShowInventoryForm((prevState) => !prevState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchAllItems());
    };
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="inventory">
        <h2 className="inventory__title">Inventory Status</h2>
        <button onClick={toggleForm}>
          <img src={addIcon} alt="Add Item" />
        </button>
        <ul className="inventory__ul">
          {allItems.map(({ name, quantity, price, _id }, index) => {
            return (
              <li className="inventory__li" key={index}>
                <button
                  type="button"
                  className="inventory__li__close-btn"
                  onClick={() => dispatch(deleteItem(_id))}
                >
                  <img src={closeIcon} alt="Close Button" />
                </button>
                <p>Name: {name}</p>
                <p>Product ID: {_id}</p>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
              </li>
            );
          })}
        </ul>
      </div>
      {showInventoryForm && <InventoryForm toggleModal={toggleForm} />}
    </>
  );
};

export default Inventory;
