const initialState = {
  fullname: "",
  email: "",
  phoneNumber: "",
  address: "",
  note: "",
  alertContent: "",
  isOpenAlert: false,
  alertStatus: "warning",
};

function OrderEvent(state = initialState, action) {
  const callApi = async (paramUrl, paramOptions = {}) => {
      const response = await fetch(paramUrl, paramOptions);
      const responseData = await response.json();
      return responseData;
  };
  switch (action.type) {
    case "GET_USER_INFOMATION":
      const user = action.value;

      if (user.displayName) {
        state.fullname = user.displayName;
      };
      if (user.email) {
        state.email = user.email;
      };
      if (user.phoneNumber) {
        state.phoneNumber = user.phoneNumber;
      };
      if (user.address) {
        state.address = user.address;
      };
      return {
        ...state,
      };
    case "CHANGE_FULLNAME_INPUT":
      return {
        ...state,
        fullname: action.value
      }
    case "CHANGE_ADDRESS_INPUT":
      return {
        ...state,
        address: action.value
      }
    case "CHANGE_EMAIL_INPUT":
      return {
        ...state,
        email: action.value
      }
    case "CHANGE_PHONE_NUMBER_INPUT":
      return {
        ...state,
        phoneNumber: action.value
      }
    case "CHANGE_NOTE_INPUT":
      return {
        ...state,
        note: action.value
      }
    case "CLOSE_ALERT":
      return {
        ...state,
        isOpenAlert: false
      }
    case "CONFIRM_ORDER":
      const createOrderForNewCustomer = () => {
        console.log("create-customer")
        let body = {
          method: "POST",
          body: JSON.stringify({
            fullName: state.fullname,
            phone: state.phoneNumber,
            email: state.email,
            address: state.address,
            // city: body.city,
            // country: body.country
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
        callApi('https://shop24hbackend.vercel.app/customers', body)
          .then((data) => {
            callApiCreateOrder(data.data)
          })
          .catch((error) => {
            console.log(error);
          })
      }
      const callApiCreateOrder = (customer) => {
        console.log(customer)
        if(!customer){
          console.log("create failed");
          return {
            ...state,
            alertContent: "Error",
            alertStatus: "error",
            isOpenAlert: true
          }
        }
        const customerId = customer._id;
        let body = {
          method: "POST",
          body: JSON.stringify({
            orderDetail: action.value.buyList,
            cost: action.value.totalPrice,
            note: state.note,
            customerInfo:customer
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
        callApi(`https://shop24hbackend.vercel.app/customers/${customerId}/orders`, body)
          .then((data) => {
            console.log(data.data);
            console.log("orderSuccess")
            return {
              ...state,
              isOpenAlert: true,
              alertContent: "Order placed successfully",
              alertStatus: "success",
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
      const createNewOrderHandler = () => {
        callApi("https://shop24hbackend.vercel.app/customers?phoneNumber=" + state.phoneNumber)
          .then((data) => {
            if (data.data.length === 0) {
             createOrderForNewCustomer();
            } else {
             callApiCreateOrder(data.data[0]);
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }
      if (state.fullName === "") {
        return {
          ...state,
          isOpenAlert: true,
          alertContent: "Full name is invalid",
          alertStatus: "warning",
        }
      }
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(state.email)) {
        return {
          ...state,
          isOpenAlert: true,
          alertContent: "Email is invalid",
          alertStatus: "warning",
        }
      }
      if (isNaN(state.phoneNumber) || state.phoneNumber === "") {
        return {
          ...state,
          isOpenAlert: true,
          alertContent: "Phone Number is invalid",
          alertStatus: "warning",
        }
      }
      if (state.address === "") {
        return {
          ...state,
          isOpenAlert: true,
          alertContent: "address is invalid",
          alertStatus: "warning",
        }
      }
     createNewOrderHandler();
      return state;
    default:
      return state;
  }
};

export default OrderEvent;
