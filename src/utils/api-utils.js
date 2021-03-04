import request from 'superagent';

const URL = 'https://favorites-back-end.herokuapp.com';

export async function signUpUser(name, email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ name, email, password })

    return response.body;
}

export async function loginUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })

    return response.body;
}