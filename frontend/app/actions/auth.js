import * as actionTypes from './actionTypes';

export const authStart = () => ({
    type: actionTypes.AUTH_START,
});

export const authSuccess = token => ({
    type: actionTypes.AUTH_SUCCESS,
    token,
});

export const authFail = error => ({
    type: actionTypes.AUTH_FAIL,
    error,
});

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

export const checkAuthTimeout = expirationTime => (dispatch) => {
    setTimeout(() => {
        dispatch(logout());
    }, expirationTime * 1000);
};

export const authLogin = (username, password) => (dispatch) => {
    dispatch(authStart());
    fetch('http://localhost:8000/rest-auth/login/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    })
        .then(response => response.json())
        .then((res) => {
            const token = res.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch((err) => {
            dispatch(authFail(err));
        });
};


export const authSignup = (username, email, password1, password2) => (dispatch) => {
    dispatch(authStart());
    fetch('http://localhost:8000/rest-auth/registration/', {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password1,
            password2,
        }),
    })
        .then((res) => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch((err) => {
            dispatch(authFail(err));
        });
};

export const authCheckState = () => (dispatch) => {
    const token = localStorage.getItem('token');
    if (token === 'undefined') {
        dispatch(logout());
    } else {
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            dispatch(logout());
        } else {
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
    }
};
