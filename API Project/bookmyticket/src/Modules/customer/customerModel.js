import { pool } from '../../../DB/connection.js';

const customerQuery = {
    getMovieByCityNameQuery : async (cityName) => {
        const [result] = await pool.query("SELECT DISTINCT c.name AS `City Name` , m.name AS `Movie Name` FROM city c INNER JOIN cinema cc ON cc.city_id = c.id INNER JOIN cinema_hall ch ON ch.cinema_id = cc.id INNER JOIN `show` sh ON sh.cinema_hall_id = ch.id INNER JOIN movie m ON m.id = sh.movie_id WHERE c.name = ?", [cityName]);
        return result;
    },

    getMovieByCinemaHallQuery : async (cinemaHallName) => {
        const [result] = await pool.query("SELECT DISTINCT c.name AS `Cinema Name`, m.name AS `Movie Name` FROM cinema c INNER JOIN cinema_hall ch ON ch.cinema_id = c.id INNER JOIN `show` sh  ON sh.cinema_hall_id INNER JOIN movie m ON m.id = sh.movie_id WHERE c.name = ?", [cinemaHallName]);
        return result;
    },

    getMovieByNameQuery : async (movieName) => {
        const [result] = await pool.query("SELECT * FROM movie WHERE name LIKE ?", [`%${movieName}%`]);
        return result;
    },

    getShowSeatingPlanQuery : async (data) => {
        const [result] = await pool.query("SELECT c.name AS 'City Name', m.name AS 'Movie Name', cn.name AS 'Cinema Name', ch.name AS 'Cinema hall Name', sh.date AS 'Show Date', sh.time AS 'Show Time', chs.name AS 'Section Name', seat.number AS 'Seat Number', ssp.status AS 'Seat Status' from movie m inner join `show` sh on sh.movie_id = m.id inner join show_section ss on ss.show_id = sh.id inner join show_seating_plan ssp on ssp.show_section_id = ss.id inner join seat on seat.id = ssp.seat_id inner join cinema_hall_section chs on chs.id = seat.cinema_hall_section_id inner join cinema_hall ch on ch.id = chs.cinema_hall_id inner join cinema cn on cn.id = ch.cinema_id inner join city c on c.id = cn.city_id WHERE c.name = ? AND m.name = ? AND cn.name = ? AND ch.name = ? AND sh.id = ?", [data.cityName, data.movieName, data.cinemaName, data.cinemaHallName, data.showId]);
        return result;
    },

    getTopTenActorWithMaxMoviesQuery : async () => {
        const [result] = await pool.query("SELECT actor.name, count(movie.id) as Total FROM actor INNER JOIN movie_cast ON movie_cast.actor_id = actor.id INNER JOIN movie ON movie.id = movie_cast.movie_id GROUP BY actor.name ORDER BY total DESC LIMIT 10");
        return result;
    },

    getMovieByYearQuery : async () => {
        const [result] = await pool.query("SELECT YEAR(release_date) AS Year, JSON_ARRAYAGG(name) AS Movies FROM movie GROUP BY YEAR(release_date)");
        return result;
    }
}

export { customerQuery };