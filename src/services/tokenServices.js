function setTokenToLocalStorage(token) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("token", token);
    }
}

function setExpiredToken(expired) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("expired", expired);
    }
}

function getExpiredToken() {
    if (typeof(Storage) !== "undefined") {
        return localStorage.getItem("expired");
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

function watchToken() {
    const userToken = getTokenFromLocalStorage();
    const expiredTme = getExpiredToken();

    if (!userToken || !expiredTme) return;

    const intervalCheck = setInterval(() => {
        const now = new Date();
        const expiredDate = new Date(expiredTme);

        if (now >= expiredDate) {
            localStorage.removeItem("token");
            localStorage.removeItem("expired");
            clearInterval(intervalCheck);
            window.location.reload();
        }
    }, 60 * 1000);
}

export { 
    setTokenToLocalStorage,
    getTokenFromLocalStorage,
    setExpiredToken,
    getExpiredToken,
    watchToken
}