const initialState = {
  seller: [{ num: 1, img: "img/mia.png", name: "Mia Ayana", info1: 5.25 }],
};
const SellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELLER":
      return {
        ...state,
        seller: action.value.seller,
      };
    default:
      return state;
  }
};

export default SellerReducer;
