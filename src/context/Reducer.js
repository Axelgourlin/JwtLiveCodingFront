const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        access_token: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        access_token: null,
        error: true,
      };
    case "LOGOUT":
      return {
        access_token: null,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;
