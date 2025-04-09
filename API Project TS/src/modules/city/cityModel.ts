import { pool } from '../../DB/connection';

interface City {
    id : number;
    name : string;
    state : string;
}

const cityQuery = {
    getAllCitiesQuery : async () : Promise<City[]> => {
        const [rows] = await pool.query("SELECT * FROM city");
        return rows as City[];
    },

    getAnySelectedCityQuery : async (cityName:string) : Promise<City[]> => {
        const [rows] = await pool.query("SELECT * FROM city WHERE name = ?", [cityName]);
        return rows as City[];
    },

    getSearchedCity : async (name:string) : Promise<City[]> => {
        const [rows] = await pool.query("SELECT name FROM city WHERE name = ?", [name]);
        return rows as City[];
    },

    addNewCityQuery : async (name:string, state:string) : Promise<City[]> => {
        const [rows] = await pool.query("INSERT INTO city (name, state) VALUES (?, ?)", [name, state]);
        return rows as City[];
    },

    updateCityQuery : async (name:string, state:string, cityName:string) : Promise<any> => {
        const [rows] = await pool.query(`
            UPDATE city 
            SET name = ? , state = ?
            WHERE name = ?`, 
            [name, state, cityName] );
        return rows;
    },

    deleteCityQuery : async (cityName:string) : Promise<any> => {
        const [rows] = await pool.query('DELETE FROM city WHERE name = ?', [cityName]);
        return rows;
    }
}

export { cityQuery };