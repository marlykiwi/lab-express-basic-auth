const bcrypt = require('bcrypt');

const password = '123456';

const salt = '$2b$10$JZQrDLRvuwoxVN1oyVUzae';
console.log({salt});

const hash = bcrypt.hashSync(password, salt);
console.log({hash});