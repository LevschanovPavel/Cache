
### Реализация кэширующего слоя (Middleware) для REST API

#### Задание:

Доработать веб-сервер, который будет кэшировать результаты запросов к внешнему API и возвращать их из кэша при повторных запросах.

---

### Требования:

#### Проинициализировать проект  
- Кэш реализовать как простой JavaScript объект (`cache`)  
- Добавить возможность очистки кэша (метод `DELETE`), отправлять ответ клиенту со статусом `204` без тела ответа  
- Добавить время жизни данных в кеше (например, 5 минут) и механизм автоматической очистки данных  

#### Ответ на GET-запрос возвращать в JSON формате:
```json
{
    "cache": false,
    "data": ["...данные"]
}
```
или (если данные взяты из кэша):
```json
{
    "cache": true,
    "data": ["...данные"]
}
```

#### Запуск проекта командой:
```bash
npm start
```

#### Продемонстрировать работу кэширования любым удобным способом:  
(curl, REST client среды разработки, Postman и т.д.)

---

### Добавить возможность отслеживать статистику использования кэша:

#### GET `/cache-stats`

Эндпоинт, возвращающий статистику:

```json
{
    "totalRequests": 10, "// Общее количество запросов."
    "cacheHits": 3,      "// Количество успешных попаданий в кэш"
    "cacheMisses": 7     "// Количество промахов"
}
```

---

### Добавить логирование:

- Записывать логи в файл `logs.txt`
- Формат записи:
```
[2025-01-19T01:47:24.510Z] Запрос "/users" выполнен напрямую через внешнее API.
[2025-01-19T01:47:30.678Z] Кэш полностью очищен.
[2025-01-19T01:47:35.136Z] Запрос "/users" выполнен напрямую через внешнее API.
[2025-01-19T01:47:41.877Z] Запрос "/users" выполнен из кэша.
[2025-02-19T01:48:04.830Z] Удаление устаревшей записи из кэша: "/users"
```

- Реализовать запись в файл асинхронно (без коллбэков) с использованием `async/await`

---

Если нужно — могу помочь с реализацией конкретных файлов или примерами кода.
