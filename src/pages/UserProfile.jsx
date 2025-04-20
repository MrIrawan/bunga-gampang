import { useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../services/tokenServices.js";

export default function UserProfile() {

    const navigate = useNavigate();

    if (!getTokenFromLocalStorage()) {
        navigate("/masuk");
    }
}