import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Sales.scss";
import addIcon from "../../../public/asset/addIcon.svg";
import { fetchAllSales } from "../../actions";
import SaleForm from "../../components/SaleForm/SaleForm";

const Sales = () => {
  const dispatch = useDispatch();
  const allSales = useSelector((state) => state.sales);

  const [showSaleForm, setSaleForm] = useState(false);
  const toggleForm = () => setSaleForm((prevState) => !prevState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchAllSales());
    };
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sales">
      <h2 className="sales__title">Sales</h2>
      <button onClick={toggleForm}>
        <img src={addIcon} alt="Add Item" />
      </button>
      <ul className="sales__ul">
        {allSales.map(({ name, quantity, unitPrice, netAmount, time }) => {
          return (
            <li className="sales__li" key={time}>
              <p>Name: {name}</p>
              <p>Quantity: {quantity}</p>
              <p>Unit price: {unitPrice}</p>
              <p>Total: {netAmount}</p>
              <p>Time: {time}</p>
            </li>
          );
        })}
      </ul>
      {showSaleForm && <SaleForm toggleModal={toggleForm} />}
    </div>
  );
};

export default Sales;
