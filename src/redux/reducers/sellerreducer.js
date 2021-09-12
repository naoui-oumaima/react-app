const initialState = {
  seller: [
    {
      src: "img/bid1.png",
      info1: "Abstract Smoke Red Blue",
      info2: "1.25 ",
      like: "img/like.png",
      nblikes: 92,
      creator: "Mia Ayana",
      creatorimg: "img/mia.png",
    },
  ],
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
