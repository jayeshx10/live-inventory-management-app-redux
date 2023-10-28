const initialState = {
  inventory: [],
  sales: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchAllItems":
      return {
        ...state,
        inventory: action.payload
      };
    case "addItem":
      return {
        ...state,
        inventory: [...state.inventory, action.payload]
      };
    case "removeItem":
      return {
        ...state,
        inventory: state.inventory.filter((item) => item._id !== action.payload)
      };
    case "editItem":
      const updatedInventory = state.inventory.map((item) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            name: action.payload.name,
            price: action.payload.price,
            quantity: action.payload.quantity
          };
        } else return item;
      });
      return {
        ...state,
        inventory: updatedInventory
      };
    case "fetchAllSales":
      return {
        ...state,
        sales: action.payload
      };
    case "addSale":
      return {
        ...state,
        sales: [...state.sales, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
