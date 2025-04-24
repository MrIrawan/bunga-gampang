import { createContext, useReducer, useEffect } from "react";
import { getTokenFromLocalStorage } from "../services/tokenServices";

export const AuthContext = createContext();

const initialState = {
    user: null,
    token: getTokenFromLocalStorage() || null,
    isAuthorized: getTokenFromLocalStorage() ? true : false
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

export function AuthContextProvider({ children }) {
    const [ state, dispatch ] = useReducer(authReducer, initialState);

    useEffect(() => {
        if (state.token && !state.user) {
            const fetchUserProfile = async () => {
                try {
                    const response = await fetch("http://localhost:8800/api/profile", {
                        method: "GET",
                        headers: {
                            "Authorization": `Bearer ${state.token}`
                        }
                    });

                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }

                    const responseData = await response.json();
                    dispatch({ type: "LOGIN", payload: { user: responseData.data, token: state.token } });
                } catch (error) {
                    console.error(error);
                }
            }

            fetchUserProfile();
        }
    }, [state.token]);

    return (
        <AuthContext.Provider value={{ state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}