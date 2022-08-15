import { createStore, combineReducers } from "redux";
import CartEvents from "../components/action/CartEvents";
import OrderEvent from "../components/action/OrderEvent";
import TaskEvent from "../components/action/TaskEvent";

const appReducer = combineReducers({
  filterReducer: TaskEvent,
  cartReducer: CartEvents,
  orderReducer: OrderEvent
});

const store = createStore(appReducer, undefined, undefined);
export default store;
