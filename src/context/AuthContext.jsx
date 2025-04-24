import { createContext, useReducer, useEffect } from "react";
import { getTokenFromLocalStorage } from "../services/tokenServices";

export const AuthContext = createContext();

const initialState = {
    user: null,
    token: getTokenFromLocalStorage() || null,
}

function authReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: null,
            };
        default:
            return state;
    }
}

function AuthContextProvider({ children }) {
    const [ state, dispatch ] = useReducer(authReducer, initialState);

    useEffect(() => {
        if (state.token && !state.user) {
            fetch("http://localhost:8800/api/profile", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${state.token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    dispatch({ type: 'LOGIN', payload: { user: data.data.user, token: state.token } });
                }
            })
        }
    }, [state.token]);

    return (
        <AuthContext.Provider value={{ state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider };