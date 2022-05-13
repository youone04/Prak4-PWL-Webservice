
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {id: 1, username: 'Yudi Gunawan', text:"Saya Sangat termotivasi untuk terus belajar dan mengasah kemampuan dalam dunia pemrograman agar dapat tumbuh secara profesional. Saya yakin dengan kemampuan saya dapat menghasilkan ide yang menarik dalam membuat sebuah aplikasi",text_cv:'CV', link_cv:'https://youone04.github.io',text_github:'Github',link_github:'https://github.com/youone04'}
      ]);
    });
};
