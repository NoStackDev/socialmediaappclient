import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  // user: {
  //   _id: "61f1375a08b1262ee33ab329",
  //   firstName: "Bailey",
  //   lastName: "Rogahn",
  //   email: "Justina_Spinka31@yahoo.com",
  //   dateOfBirth: "1977-05-29T21:20:01.782Z",
  //   profilePic:
  //     "https://i.picsum.photos/id/1045/400/400.jpg?hmac=aw8pmClsM82yxjPdAjR7CjRmgchOXpmQ5nB-n_bJsH4",
  //   coverPic:
  //     "https://i.picsum.photos/id/362/1000/500.jpg?hmac=1QMBDYX5OYh8ZnoIw3DSo-kiipPVeNEKWb5V7K6xBGo",
  //   desc: "Reprehenderit et consequatur ipsa quia ut in eligendi soluta. Nihil accusamus et perspiciatis sed tempore ut dolores iste. Ad quos sint architecto consequatur quia reiciendis incidunt. Qui reiciendis quibusdam veritatis quam dolor. Et dolore fugit qui rerum et.",
  //   country: "Jordan",
  //   city: "Modesto",
  //   posts: [
  //     "61f13a1008b1262ee33ac065",
  //     "61f13a1008b1262ee33ac067",
  //     "61f13a1008b1262ee33ac069",
  //     "61f13a1008b1262ee33ac06b",
  //     "61f13a1008b1262ee33ac06d",
  //     "61f13a1008b1262ee33ac06f",
  //     "61f13a1008b1262ee33ac071",
  //     "61f13a3608b1262ee33ad548",
  //     "61f13a3608b1262ee33ad54a",
  //     "61f13a3608b1262ee33ad54c",
  //     "61f13a3608b1262ee33ad54e",
  //     "61f13a3608b1262ee33ad550",
  //     "61f13a3608b1262ee33ad552",
  //     "61f13a3608b1262ee33ad554",
  //     "61f13a3608b1262ee33ad556",
  //     "61f13a3608b1262ee33ad558",
  //     "61f13a3608b1262ee33ad55a",
  //   ],
  //   likedPosts: [
  //     "61f13a3708b1262ee33adef4",
  //     "61f13a3708b1262ee33ad8ea",
  //     "61f13a3608b1262ee33ad588",
  //     "61f13a3708b1262ee33ad8b8",
  //     "61f13a1108b1262ee33aca9d",
  //     "61f13a1108b1262ee33ac405",
  //     "61f13a1108b1262ee33ac69b",
  //     "61f13a1108b1262ee33ac991",
  //     "61f13a3708b1262ee33ade5a",
  //     "61f13a1108b1262ee33ac6e5",
  //     "61f13a3608b1262ee33ad5e8",
  //     "61f13a1108b1262ee33ac507",
  //     "61f13a3708b1262ee33ad640",
  //     "61f13a3708b1262ee33ad7cc",
  //     "61f13a3708b1262ee33ad65a",
  //     "61f13a3708b1262ee33ade42",
  //     "61f13a3708b1262ee33ad82e",
  //     "61f13a1108b1262ee33ac99f",
  //     "61f13a3708b1262ee33adf54",
  //     "61f13a3708b1262ee33adcbe",
  //     "61f13a3708b1262ee33ad81e",
  //     "61f13a3708b1262ee33add1a",
  //     "61f13a3708b1262ee33add54",
  //     "61f13a3708b1262ee33add84",
  //     "61f13a3608b1262ee33ad546",
  //     "61f13a3708b1262ee33ad832",
  //     "61f13a3608b1262ee33ad628",
  //     "61f13a1108b1262ee33ac363",
  //     "61f13a1108b1262ee33ac4c3",
  //     "61f13a1108b1262ee33aca5d",
  //     "61f13a1108b1262ee33aca17",
  //     "61f13a1108b1262ee33ac60f",
  //     "61f13a3708b1262ee33ad754",
  //     "61f13a1108b1262ee33ac4c9",
  //     "61f13a1108b1262ee33ac58d",
  //     "61f13a3608b1262ee33ad5b4",
  //     "61f13a3708b1262ee33ad890",
  //     "61f13a1108b1262ee33ac605",
  //     "61f13a3708b1262ee33ade0c",
  //     "61f13a3708b1262ee33ad666",
  //     "61f13a1108b1262ee33ac61f",
  //     "61f13a3708b1262ee33adbfa",
  //     "61f13a3708b1262ee33ad878",
  //     "61f13a3608b1262ee33ad616",
  //     "61f13a3608b1262ee33ad61c",
  //     "61f13a3708b1262ee33ada3c",
  //     "61f13a1108b1262ee33aca89",
  //   ],
  //   followers: [
  //     "61f137c308b1262ee33ab346",
  //     "61f137c308b1262ee33ab351",
  //     "61f137c408b1262ee33ab35d",
  //     "61f1386108b1262ee33ab3b4",
  //     "61f1375a08b1262ee33ab316",
  //     "61f1382a08b1262ee33ab3a4",
  //     "61f1386108b1262ee33ab3ab",
  //     "61f1386108b1262ee33ab3b6",
  //   ],
  //   following: [
  //     "61f1386108b1262ee33ab3c9",
  //     "61f137e208b1262ee33ab37e",
  //     "61f1386308b1262ee33ab3cb",
  //     "61f137e208b1262ee33ab369",
  //     "61f1386108b1262ee33ab3ad",
  //     "61f137e208b1262ee33ab373",
  //     "61f1382908b1262ee33ab398",
  //     "61f137e208b1262ee33ab376",
  //     "61f137e208b1262ee33ab378",
  //   ],
  //   relationship: "Married",
  //   isAdmin: false,
  //   createdAt: "2022-01-26T11:58:18.801Z",
  //   updatedAt: "2022-01-26T12:12:38.572Z",
  //   __v: 81,
  // },
  isFetching: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
