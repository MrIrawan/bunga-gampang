function setTokenToLocalStorage(token) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("token", token);
    }
}

function getTokenFromLocalStorage() {
    if (typeof(Storage) !== "undefined") {
        return localStorage.getItem("token");
    }
}

export { setTokenToLocalStorage, getTokenFromLocalStorage }