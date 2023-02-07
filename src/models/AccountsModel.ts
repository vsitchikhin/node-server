export const createAccountsTableQuery = `CREATE TABLE IF NOT EXISTS accounts(
    id INT NOT NULL AUTO_INCREMENT,
    url VARCHAR(255),
    login VARCHAR(255),
    password VARCHAR(255),
    name VARCHAR(255),
    user_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) 
        REFERENCES users(id)
        ON DELETE CASCADE
);`