import { pool } from '../../DB/connection';

interface Cinema {
    id : number,
    code : number,
    name : string,
    city_id : number,
    address : string;
}

const cinemaQuery = {
    getCinemaQuery : async () : Promise<Cinema[]> => {
        const [result] = await pool.query("SELECT * FROM cinema");
        return result as Cinema[];
    },

    addCinemaQuery : async (data : {code:number, name:string, cityId:number, address:number}) : Promise<Cinema[]> => {
        const [result] = await pool.query(`
            INSERT INTO cinema
            (code, name, city_id, address)
            values (?, ?, ?, ?)`,
            [data.code, data.name, data.cityId, data.address]);
        return result as Cinema[];
    },

    updateCinemaQuery : async (data : {code:number, name:string, cityId:number, address:number, cinemaCode:string}) : Promise<any> => {
        const [result] = await pool.query(`UPDATE cinema
            SET code = ?, name = ?, city_id = ?, address = ?
            WHERE code = ?`,
        [data.code, data.name, data.cityId, data.address, data.cinemaCode]);
        return result;
    },

    deleteCinemaQuery : async (cinemaCode:string) : Promise<any> => {
        const [result] = await pool.query("DELETE FROM cinema WHERE code = ?", [cinemaCode]);
        return result;
    }
}

export { cinemaQuery };