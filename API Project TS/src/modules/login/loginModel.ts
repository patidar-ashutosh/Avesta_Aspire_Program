import { pool } from "../../DB/connection";

interface User {
    id : number,
    username : string,
    password : string,
    role : string;
}

const loginQuery = {
    getLoginInfoQuery : async (username:string, password:string) : Promise<User[]> => {
        const [result] = await pool.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password]);
        return result as User[];
    }
}

export { loginQuery };