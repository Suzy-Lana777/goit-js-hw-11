// написання функції для HTTP-запитів

import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export function nttpRequest (userRequest) {
    const paramsForHttp = new URLSearchParams ({
        q: userRequest,
        key: `49399736-5639b789053676a95c3f2e38d`,
        image_type: `photo`, 
        orientation: `horizontal`,
        safesearch : true,

    })
    return fetch (`https://pixabay.com/api/?${paramsForHttp}`)

    //обробляємо відповідь що прийшла 
    .then (queryResult=>{
    //робимо перевірку, якщо інфа прийшла з помилкою, то перекидаємо у catch
    if (!queryResult.ok)
      {throw new Error(queryResult.status);}
        
    //а якщо все ок, тоді РОЗПАРШУЄМО данні для наступного then
    return queryResult.json();
    })
}















// export function nttpRequest (userRequest) {
//     const params = new URLSearchParams ({
//         q: searchUser,
//         key: `49399736-5639b789053676a95c3f2e38d`,
//         image_type: `photo`, 
//         orientation: `horizontal`,
//         safesearch : true,
//     }) 

//     return fetch (`https://pixabay.com/api/?${paramsForHttp}`)

//     //обробляємо відповідь що прийшла 
//     .then (queryResult=>{
//     //робимо перевірку, якщо інфа прийшла з помилкою, то перекидаємо у catch
//     if (!queryResult.ok)
//       {throw new Error(queryResult.status);}
        
//     //а якщо все ок, тоді РОЗПАРШУЄМО данні для наступного then
//     return queryResult.json();
//     })


// }