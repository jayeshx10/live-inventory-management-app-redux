import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Dashboard.scss";
import { fetchAllItems, fetchAllSales } from "../../actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const allItems = useSelector((state) => state.inventory);
  const allSales = useSelector((state) => state.sales);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchAllItems());
      dispatch(fetchAllSales());
    };
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__inventory">
        <h2 className="dashboard__title">Inventory Status</h2>
        <ul className="dashboard__ul">
          {allItems.map(({ name, quantity, price }, index) => {
            return (
              <li className="dashboard__li" key={index}>
                <p>Name: {name}</p>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="dashboard__sales">
        <h2 className="dashboard__title">Sales</h2>
        <ul className="dashboard__ul">
          {allSales.map(({ name, quantity, unitPrice, netAmount, time }) => {
            return (
              <li className="dashboard__li" key={time}>
                <p>Name: {name}</p>
                <p>Quantity: {quantity}</p>
                <p>Unit price: {unitPrice}</p>
                <p>Total: {netAmount}</p>
                <p>Time: {time}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
