import { combineReducers } from "redux";
import SellerReducer from "./sellerreducer"
import ItemReducer from "./itemreducer"

const Reducers = combineReducers({
  seller:SellerReducer,
  item:ItemReducer,
});

export default Reducers;