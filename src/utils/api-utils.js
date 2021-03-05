import request from 'superagent';

// const URL = 'https://favorites-back-end.herokuapp.com';
const URL = 'http://localhost:3000';

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

export async function searchBooks(query, token) {
    const response = await request
        .get(`${URL}/books?search=${query}`)
        .set('Authorization', token)

    return response.body;
}





// export async function addFavorite(book, token) {
//     const response = await request
//         .post(`${URL}/api/favorites`)
//         .set('Authorization', token)
//         .send(book)

//     return response.body;
// }

// export async function getFavorites(token) {
//     const response = await request
//         .get(`${URL}/api/favorites`)
//         .set('Authorization', token);

//     return response.body;
// }

