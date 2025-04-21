function setTokenToLocalStorage(token) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("token", token);
    }
}

function isTokenAvailable() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("token")) {
            return true;
        }
        return false;
    }
}

function getTokenFromLocalStorage() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("token")) {
            return localStorage.getItem("token");
        }
        return false;
    }
}

function removeTokenFromLocalStorage(expDate) {

    const expiredTokenDate = new Date(expDate);
    const currentDate = new Date();

    if (typeof(Storage) !== "undefined") {
        if (expiredTokenDate < currentDate) {
            localStorage.removeItem("token");
        }
    }
}

export { 
    setTokenToLocalStorage,
    isTokenAvailable,
    getTokenFromLocalStorage,
    removeTokenFromLocalStorage
}