import { createContext, useReducer, useEffect } from "react";
import { getTokenFromLocalStorage } from "../services/tokenServices";

export const AuthContext = createContext();

const initialState = {
    user: null,
    token: getTokenFromLocalStorage() || null,
}

function authReducer(state, action) {}