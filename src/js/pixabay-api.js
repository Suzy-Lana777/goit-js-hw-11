// написання функції для HTTP-запитів
import axios from 'axios';

export function searchImages (searchUser) {
    const params = new URLSearchParams({
        q: searchUser,
        key: `49399736-5639b789053676a95c3f2e38d`,
        image_type: `photo`, 
        orientation: `horizontal`,
        safesearch : true,
    }) 

    return fetch(`https://pixabay.com/api/?${params}`)

        //обробляємо відповідь що прийшла і робимо перевірку
    // якщо все ок то розпаршуємо дані
        
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('')
        }
        });
// створили вручну помилку щоб спрацював catch
}