const axios = require('axios').default;
const response = require('../helpers/response');
const qs = require('querystring');

const login_password = async (req, res) => {
    try {
        const options = {
            method: 'POST',
            url: 'https://dev-6-rcw0yp.us.auth0.com/oauth/token',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify({
                grant_type: 'password',
                audience: process.env.AUDIENCE,
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                username: req.body.username,
                password: req.body.password,
                scope: 'openid email profile read:book write:book update:book delete:book'
            })
        };
        await axios.request(options)
            .then((login) => {
                return response.successResponse(res, login.data)
            })
            .catch((err) => {
                return response.errorResponse(res, err.message)
            })
    } catch (err) {
        return response.errorResponse(res, err.message);
    }
};

const login_client = async (req, res) => {
    try {
        const options = {
            method: 'POST',
            url: 'https://dev-6-rcw0yp.us.auth0.com/oauth/token',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({
                grant_type: 'client_credentials',
                audience: process.env.AUDIENCE,
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET
            })
        };
        axios.request(options)
            .then((login) => {
                return response.successResponse(res, login.data)
            })
    } catch (err) {
        return response.errorResponse(res, err.message);
    }
};

const profile = async (req, res) => {
    try {
        const options = {
            method: 'POST',
            url: 'https://dev-6-rcw0yp.us.auth0.com/oauth/token',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({
                grant_type: 'client_credentials',
                audience: process.env.AUDIENCE,
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET
            })
        };
        axios.request(options)
            .then((login) => {
                return response.successResponse(res, login.data)
            })
    } catch (err) {
        return response.errorResponse(res, err.message);
    }
}
module.exports = {
    login_password,
    login_client,
}
