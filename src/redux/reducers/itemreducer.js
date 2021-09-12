const initialState = {
  item: null,
};
const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEM":
      return {
        ...state,
        item: action.value.item,
      };
    default:
      return state;
  }
};

export default ItemReducer;
