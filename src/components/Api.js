export default class Api {

    constructor(url) {
        this._url = url;
        this._headers = {
            'Content-Type': 'application/json',
        }
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    addOrder(total) {
        const body = {
            total
        };
        return fetch (`${this._url}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body),
        })
        .then(this._checkResponse);
    }
}