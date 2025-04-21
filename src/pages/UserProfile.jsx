import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../services/tokenServices.js";

export default function UserProfile() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!getTokenFromLocalStorage()) {
            navigate("/masuk");
        }
    }, []);

    return (
        <>
            
        </>
    )
}