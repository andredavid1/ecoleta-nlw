import knex from 'knex';
import * as dotEnv from 'dotenv';

dotEnv.config();

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PSW
    },
    useNullAsDefault: true,
});

export default connection;