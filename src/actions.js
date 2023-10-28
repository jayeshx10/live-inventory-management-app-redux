import axios from "axios";

const apiBaseUrl = "https://inventory-management-apis.jayeshpatil26.repl.co";

// fetch all inventory
export const fetchAllItems = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/items`);
    const allItems = response?.data?.data;
    dispatch({ type: "fetchAllItems", payload: allItems });
  } catch (error) {
    console.log("Error while fetching the inventory: ", error);
  }
};

// add an item to inventory
export const addItem = (formData) => async (dispatch) => {
  const itemData = {
    name: formData.itemName,
    quantity: formData.itemQuantity,
    price: formData.itemPrice
  };

  try {
    const response = await axios.post(`${apiBaseUrl}/items`, itemData);
    const newItem = response?.data;
    dispatch({ type: "addItem", payload: newItem });
  } catch (error) {
    console.log("Error while adding item to the inventory: ", error);
  }
};

// deleteItem
export const deleteItem = (targetID) => async (dispatch) => {
  try {
    const response = await axios.delete(`${apiBaseUrl}/items/${targetID}`);
    const deletedItem = response?.data;
    dispatch({ type: "removeItem", payload: deletedItem?._id });
  } catch (error) {
    console.log("Error while deleting an item: ", error);
  }
};

// edit an item
export const editItem = (targetID, updatedData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/items/${targetID}`,
      updatedData
    );
    const editedItem = response?.data;
    dispatch({ type: "editItem", payload: editedItem?._id });
  } catch (error) {
    console.log("Error while editing the item: ", error);
  }
};

//fetch all sales
export const fetchAllSales = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/sales`);
    const allSales = response?.data?.data;
    dispatch({ type: "fetchAllSales", payload: allSales });
  } catch (error) {
    console.log("Error while fetching sales data: ", error);
  }
};

// add a sale record
export const addSale = (formData) => async (dispatch) => {
  const saleData = {
    itemSold: formData.productID,
    quantity: formData.quantity
  };

  try {
    const response = await axios.post(`${apiBaseUrl}/sales`, saleData);
    console.log(121, response);
    const newSale = response?.data?.data;
    dispatch({ type: "addSale", payload: newSale });
  } catch (error) {
    console.log("Error while adding the sale: ", error);
  }
};
