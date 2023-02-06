import bcrypt from 'bcrypt';
import fs from 'fs';

async function createSalt() {
    return await bcrypt.genSalt(10);
}

createSalt().then((data) => {
    fs.appendFile('.env', `SALT=${data}\n`, (error) => {
        if (error) {
            console.log(error);
            throw error
        }
    })
});