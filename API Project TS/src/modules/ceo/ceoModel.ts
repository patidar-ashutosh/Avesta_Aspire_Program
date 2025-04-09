import { pool } from '../../DB/connection';

const ceoQuery = {
    getTopTenCustomersQuery : async () : Promise<any> => {
        const [result] = await pool.query("select SUM(ss.price) AS Total, customer.name from customer INNER JOIN booking ON booking.customer_id = customer.id INNER JOIN show_seating_plan ssp ON ssp.booking_id = booking.id INNER JOIN show_section ss ON ss.id = ssp.show_section_id GROUP BY customer.name ORDER BY Total DESC LIMIT 10");   
        return result;
    },

    getTotalNumberOfBookingByCinemaQuery : async () : Promise<any> => {
        const [result] = await pool.query("SELECT cinema.code, cinema.name, COUNT(booking.id) AS 'Total Booking' FROM cinema INNER JOIN cinema_hall ch ON ch.cinema_id = cinema.id INNER JOIN `show` sh ON sh.cinema_hall_id = ch.id INNER JOIN show_section ss ON ss.show_id = sh.id INNER JOIN show_seating_plan ssp ON ssp.show_section_id = ss.id INNER JOIN booking ON booking.id = ssp.booking_id GROUP BY cinema.code, cinema.name");
        return result;
    },

    getUniqueCustomersQuery : async () : Promise<any> => {
        const [result] = await pool.query("SELECT COUNT(customer.id) Total, customer.id, customer.name FROM customer INNER JOIN booking ON booking.customer_id = customer.id GROUP BY customer.id Having Total = 1");
        return result;
    },

    getCustomerBySelectedMovieAndCinemaQuery : async (cinemaName:string, movieName:string) : Promise<any> => {
        const [result] = await pool.query("SELECT customer.id, customer.name AS 'Customer Name' FROM customer INNER JOIN booking ON booking.customer_id = customer.id INNER JOIN show_seating_plan ssp ON ssp.booking_id = booking.id INNER JOIN show_section ss ON ss.id = ssp.show_section_id INNER JOIN `show` sh ON sh.id = ss.show_id INNER JOIN movie ON movie.id = sh.movie_id INNER JOIN cinema_hall ch ON ch.id = sh.cinema_hall_id INNER JOIN cinema ON cinema.id = ch.cinema_id WHERE cinema.name = ? AND movie.name = ?", [cinemaName, movieName]);
        return result;
    }
}

export { ceoQuery }