
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('komentar').del()
    .then(function () {
      // Inserts seed entries
      return knex('komentar').insert([
        {id: 1, project_id: 1, username:'Yudi', komentar:'keren'},
        {id: 2, project_id: 1, username:'Yanto', komentar:'bagus'},
        {id: 3, project_id: 2, username:'Gunawan', komentar:'mantap'}
      ]);
    });
};
