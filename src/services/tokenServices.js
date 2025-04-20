function setTokenToLocalStorage(token) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("token", token);
    }
}

function getTokenFromLocalStorage() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("token") === true) {
            return true;
        }
        return false;
    }
}

export { setTokenToLocalStorage, getTokenFromLocalStorage }