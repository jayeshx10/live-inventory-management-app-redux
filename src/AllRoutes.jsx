import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Inventory from "./pages/Inventory/Inventory.jsx";
import Sales from "./pages/Sales/Sales.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/sales" element={<Sales />} />
    </Routes>
  );
};

export default AllRoutes;
