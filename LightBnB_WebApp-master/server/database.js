const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});


const properties = require('./json/properties.json');
const users = require('./json/users.json');

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = (email) => {
  const userQuery = `SELECT * FROM users WHERE email = $1`

  return pool.query(userQuery, [email])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("error:", err.message);
    });
  };
  exports.getUserWithEmail = getUserWithEmail;


/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = (id) => {
  const userQuery = `SELECT * FROM users WHERE id = $1`
  
  return pool.query(userQuery, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log("error:", err.message);
    });
};
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = (name, password, email) => {
  const insertQuery = `INSERT INTO users (name, password, email)
  VALUES ($1, $2, $3)
  RETURNING *`

  const values = [name, password, email];

  return pool.query(insertQuery, values)
  .then((result) => {
    return (result.rows)
  })
  .catch((err) => {
    console.log("error:", err.message);
  });
};
exports.addUser = addUser;
// const userId = Object.keys(users).length + 1;
//   user.id = userId;
//   users[userId] = user;
//   return Promise.resolve(user);

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  const reservationQuery = `SELECT * FROM reservations WHERE guest_id = $1 LIMIT $2`
  
  return pool.query(reservationQuery, [guest_id, limit])
  .then((result) => {
    return (result.rows)
  })
  .catch((err) => {
    console.log(err.message);
  });
  // return getAllProperties(null, 2);
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {

    const queryParams = [];

    let queryString = `SELECT properties.*, avg(property_reviews.rating) as average_rating
    FROM properties
    JOIN property_reviews ON properties.id = property_id`

    if (options.city) {
      queryParams.push(`%${options.city}%`);
      queryString += `WHERE city LIKE $${queryParams.length}`;
    }

    if (options.owner_id) {
      queryParams.push(`${options.owner_id}`);
      queryString += `WHERE user_id LIKE $${options.owner_id}`;
    }

    if (options.average_rating >= property_reviews.rating) {
    queryParams.push(`${average_rating}`);
    queryString += `WHERE rating LIKE $${average_rating}`;
    }

    queryParams.push(limit);
    queryString += `GROUP BY properties.id
    ORDER BY cost_per_night
    LIMIT $${queryParams.length};`;

    return pool.query(queryString, queryParams).then((result) => result.rows);


  return pool
    .query (`SELECT * FROM properties LIMIT $1`, [limit])
    .then((result) => { 
      console.log(result.rows);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getAllProperties = getAllProperties;






/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {

  const insertQuery = `INSERT INTO properties 
  VALUES (owner_id, title, tumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces,
  number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code)
  RETURNING *`;

  return pool.query(insertQuery, queryParams).then((result) => result.rows[0]);

  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);

  
}
exports.addProperty = addProperty;
