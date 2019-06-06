
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Vijay Das', cohort_id: 1},
        {name: 'Chris Riffle', cohort_id: 2},
        {name: 'Ming Liu', cohort_id: 4}
      ]);
    });
};
