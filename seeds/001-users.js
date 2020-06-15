const bcrypt = require('bcrypt');

exports.seed = function (knex) {
  const password = bcrypt.hashSync('password', 8);
 
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          "username": "richard",
          password
        },
        {
          id: 2,
          "username": "billy",
          password
        }
      ]);
    });
};
