import { pool } from '../../../DB/connection.js';

const cinemaQuery = {
    getCinemaQuery : async () => {
        const [result] = await pool.query("SELECT * FROM cinema");
        return result;
    },

    addCinemaQuery : async (data) => {
        const [result] = await pool.query(`
            INSERT INTO cinema
            (code, name, city_id, address)
            values (?, ?, ?, ?)`,
            [data.code, data.name, data.cityId, data.address]);
        return result;
    },

    updateCinemaQuery : async (data) => {
        const [result] = await pool.query(`UPDATE cinema
            SET code = ?, name = ?, city_id = ?, address = ?
            WHERE code = ?`,
        [data.code, data.name, data.cityId, data.address, data.cinemaCode]);
        return result;
    },

    deleteCinemaQuery : async (cinemaCode) => {
        const [result] = await pool.query("DELETE FROM cinema WHERE code = ?", [cinemaCode]);
        return result;
    }
}

export { cinemaQuery };