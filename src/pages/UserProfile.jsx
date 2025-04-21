import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../services/tokenServices.js";

export default function UserProfile() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!getTokenFromLocalStorage()) {
            return navigate("/masuk");
        }

        const getUserProfile = async () => {
            try {
                const response = await fetch("http://localhost:8800/api/profile", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${getTokenFromLocalStorage()}`
                    }
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const responseData = await response.json();
                console.log(responseData);
                
            } catch (error) {
                console.error(error);
            }
        }

        getUserProfile();
    }, []);

    return (
        <>
            
        </>
    )
}