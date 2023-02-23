const { addBookHandler, getAllBooksHandler, getBookByIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
        options: {
            cors: {
                origin: ['*']
            }
        }
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,

    },
    {
        method: 'GET',
        path: `/books/{id}`,
        handler: getBookByIdHandler
    }
];

module.exports = routes;