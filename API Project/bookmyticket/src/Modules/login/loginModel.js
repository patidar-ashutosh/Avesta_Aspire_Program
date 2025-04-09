import { pool } from "../../../DB/connection.js";

const loginQuery = {
    getLoginInfoQuery : async (username, password) => {
        const [result] = await pool.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password]);
        return result;
    }
}

export { loginQuery };