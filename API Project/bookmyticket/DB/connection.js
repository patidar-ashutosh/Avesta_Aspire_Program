import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config(); // to load the .env variable into process.env object

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
}).promise();

export {pool};