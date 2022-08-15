const initialState = {
  taskFilterNameInput: "",
  taskFilterProductType: "",
  taskFilterMaxPriceInput: "",
  taskFilterMinPriceInput: "",
  filterInfo: {
    name: "",
    type: "",
    promotionPriceMax: "",
    promotionPriceMin: "",
  },
};
const TaskEvent = (state = initialState, action) => {
  switch (action.type) {
    case "TASK_INPUT_PRODUCT_CHANGE":
      return {
        ...state,
        taskFilterNameInput: action.value,
      };
    case "TASK_PRODUCT_TYPE_CHANGE":
      return {
        ...state,
        taskFilterProductType: action.value,
      };
    case "TASK_MAX_PRICE_PRODUCT_CHANGE":
      return {
        ...state,
        taskFilterMaxPriceInput: action.value,
      };
    case "TASK_MIN_PRICE_PRODUCT_CHANGE":
      return {
        ...state,
        taskFilterMinPriceInput: action.value,
      };
    case "TASK_ON_FILTER_CLICK": {
      return {
        ...state,
        filterInfo: {
          name: state.taskFilterNameInput,
          type: state.taskFilterProductType,
          promotionPriceMax: state.taskFilterMaxPriceInput,
          promotionPriceMin: state.taskFilterMinPriceInput,
        },
      };
    }

    default:
      return state;
  }
};

export default TaskEvent;
