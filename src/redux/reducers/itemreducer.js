const initialState = {
  item: [    {
    src: "img/bid1.png",
    info1: "Abstract Smoke Red Blue",
    info2: "1.25 ",
    like: "img/like.png",
    nblikes: 92,
    creator: "Mia Ayana",
    creatorimg: "img/mia.png",
  },],
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
