const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Простой кэш с временем жизни
const cache = {};

// Время жизни кэша в миллисекундах (5 минут)
const CACHE_TTL = 5 * 60 * 1000;

// Middleware для кэширования
function cacheMiddleware(req, res, next) {
    const url = req.url;

   //... ваш код

}

// Очистка всего кэша
app.delete('/clear-cache', (req, res) => {

    //... ваш код

    console.log('Кэш полностью очищен');
    res.send('Кэш успешно очищен');
});

// Эндпоинт, который использует внешнее API
app.get('/users', cacheMiddleware, async (req, res) => {
    try {
        console.log('Данные из внешнего API...');
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;

        //... ваш код

        
    } catch (error) {
        console.error('Ошибка при получении данных:', error.message);
        res.send('Ошибка сервера');
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
