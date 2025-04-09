import { pool } from '../../../DB/connection.js';

const cityQuery = {
    getAllCitiesQuery : async () => {
        const [result] = await pool.query("SELECT * FROM city");
        return result;
    },

    getAnySelectedCityQuery : async (cityName) => {
        const [result] = await pool.query("SELECT * FROM city WHERE name = ?", [cityName]);
        return result;
    },

    getSearchedCity : async (name) => {
        const [result] = await pool.query("SELECT name FROM city WHERE name = ?", [name]);
        return result;
    },

    addNewCityQuery : async (name, state) => {
        const [result] = await pool.query("INSERT INTO city (name, state) VALUES (?, ?)", [name, state]);
        return result;
    },

    updateCityQuery : async (name, state, cityName) => {
        const [result] = await pool.query(`
            return result;
            UPDATE city 
            SET name = ? , state = ?
            WHERE name = ?`, 
            [name, state, cityName] );
        return result;
    },

    deleteCityQuery : async (cityName) => {
        const [result] = await pool.query('DELETE FROM city WHERE name = ?', [cityName]);
        return result;
    }
}

export { cityQuery };