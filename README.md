# Простой сервер на node js

Данный сервер написан для упрощения выполнения работ в ВУЗах.
Это хорошая основа для любой лабораторной / курсовой работы.
Он будет полезен на протяжении всего обучения, по крайней мере в ВолгГТУ. \
Все что нужно для вашей работы - добавить эндпоинты и ручки для обработки запросов. \
На сервере реализована простейшая авторизация, для ее использования нужно выполнить команду \
```node ./auth/genSalt.mjs``` \
После чего, ```.env``` появится константа **SALT** \
Если файла ```.env``` не существует, он будет создан автоматически \
Если авторизация не нужна, то необходимо из ```app.ts``` удалить импорты контроллеров связанных сней

Сервер написан с использованием библиотеки **express js**, подробная документация - https://expressjs.com/ru/guide/routing.html


# Содействие
Весь дополнительный код по улучшению проекта / приведение его к виду, соответствующему вашему приложению,
должен находиться в отдельной ветке (не develop или main).
Все пользовательские типы описываются в папке ```types```
Если ваш код должен попасть в мастер - необходимо сделать **Pull Request** вашей ветки в *develop* (**не в main**) \

На проекте настроен линтер кода, который позволяет контролировать качество написанного кода. \
Мелкие проблемы он может фиксить автоматически, для этого нужно:
1. Настроить в вашей IDE запуск комманды eslint --fix при сохранении файла.
2. Написать ваш код
3. Сохранить файл

Мелкие недочеты по-типу лишних отступов, отсутствия точек с запятой и т.п. исправятся автоматически

Пример организации кода предоставлен в уже готовых файлах. \
Авторизация и регистрация на данный момент реализованы без использования сессий. Возможно в будущем это будет исправлено (но это не точно).

### Для запуска сервера необходимо выполнить следующие команды:
```npm i```\
создать файл ```.env``` и добавить в него константу ```PORT=5000``` или другой \
```npm run dev``` - версия для разработки \
```npm run build``` - компиляция проекта \
```npm run start``` - старт скомпилированного кода \
```npm tcs -w``` ```nodemon ./dist/main.js``` - если нужно дебажить (в разных терминалах)

### Подключение к базе данных
Для подключения к базе данных, необходимо добавить в ```.env``` файл константу
**DATABASE_URL** - вся информация о базе для Prisma ORM, используемой на проекте

Данная константа оформляется следующим образом: \
```DATABASE_URL=база данных(1)://имя пользователя:пароль@хост:порт базы/имя базы?необязательные дополнительные параметры```\
например: ```DATABASE_URL=mysql://root:password@3306/base_name``` \
(1) - mysql / sqlite / postgresql и т.д. \
Более подробная информация на https://www.prisma.io/docs \
На русском: https://habr.com/ru/company/timeweb/blog/654341

На данный момент Prisma не дает возможности разделять модели по файлам, поэтому разделение моделей по
смысловой нагрузке происходит путем комментариев: \
1 строка - символы "-" до 72 символа строки \
2 строка - название блока данных для моделей. \
Пример в файле ```prisma/schema.prisma``` \
При подключении к базе необходимо выполнить первую миграцию командой ```npx prisma migrate```

### База без ORM
Для подключения к базе без ORM есть отдельная ветка - ```without-orm```
В таком случае в ```.env``` нужно указать следующие данные:
```allykeynamelanguage
DATABASE=mysql/postgresql/sqlite и т.п.
DATABASE_USER=username
DATABASE_PASSWORD=password
DATABASE_PORT=port
DATABASE_NAME=databaseName
DATABASE_HOST=localhost/hostname
```
Слеши означают возможность выбора \
Все модели для базы описываются в папке ```models```, каждая модель в отдельном файле \
За правильность SQL кода в данной ветке не ручаюсь, т.к. я не эксперт в SQL, давно работаю с ORM.

### Оформление кода
* Весь код для разработки пишется в папке ```src```
* Весь код после компиляции находится в папке ```dist```
* Маршрутизация находится в папке ```routes```
* Обработка запросов описывается в папке ```controllers```
* Подключение маршрутизаторов, базы и прочих модулей в файле ```app.ts```
* Файл ```main.ts``` только запускает  сервер
* Именование контроллеров производится PascalCase
* Все остальные модули - camelCase

### Для пожертвований
Данный сервер бесплатный и будет поддерживаться по крайней мере до 2025 года.
Но если есть желание, пожертвования можно скинуть на карту ```2200 7007 4862 2502```
