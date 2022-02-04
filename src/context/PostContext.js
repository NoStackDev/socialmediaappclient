import { useReducer } from "react";
import { createContext } from "react";
import { PostReducer } from "./PostReducer";

const INITIAL_STATE = {
  isSharing: false,
  isSuccess: false,
  error: null,
};

export const PostContext = createContext(INITIAL_STATE);

export const PostContextProvider = ({ children }) => {
  const [shareState, commentDispatch] = useReducer(PostReducer, INITIAL_STATE);

  return (
    <PostContext.Provider value={{ ...shareState, commentDispatch }}>
      {children}
    </PostContext.Provider>
  );
};
