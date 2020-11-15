import React, { createContext, useReducer } from "react";

import { actions } from "./actions";
import { userLogin } from "./reducers";

export const StoreContext = createContext({});

const initialState = {
   auth: {
      isLoggedIn: false
   }
}

const Store = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <StoreContext.Provider value={[state, dispatch]}>
         {children}
      </StoreContext.Provider>
   )
}

const reducer = (state, action) => {
   switch (action.type) {
      case actions.USER_LOGIN:
         return userLogin(state, action.payload);
   
      default:
         throw new Error("invalid action type.");
   }
}
export default Store;