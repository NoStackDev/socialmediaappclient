export const PostReducer = (state, action) => {
  switch (action.type) {
    case "SHARE_START":
      return {
        isSharing: true,
        isSuccess: false,
        error: null,
      };
    case "SHARE_SUCCESSFUL":
      return {
        isSharing: false,
        isSuccess: true,
        error: null,
      };
    case "SHARE_FAILURE":
      return {
        isSharing: false,
        isSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
