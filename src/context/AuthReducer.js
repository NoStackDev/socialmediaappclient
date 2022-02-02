export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        registered: false,
        error: null,
      };
    case "LOGIN_SUCCESSFUL":
      return {
        user: action.payload,
        isFetching: false,
        registered: false,
        error: null,
      };
    case "REGISTRATION_SUCCESSFUL":
      return {
        user: null,
        isFetching: false,
        registered: true,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        registered: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
