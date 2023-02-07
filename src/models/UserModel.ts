export const createUsersTableQuery = `CREATE TABLE IF NOT EXISTS users(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        surname VARCHAR(255),
        login VARCHAR(255),
        password VARCHAR(255),
        PRIMARY KEY(id),
);`;
