
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, judul: 'Web FFUI',gambar:'https://reactjs.org/logo-og.png',keterangan:'Open House FF UI program kerja bedah fakultas yang dibawahi oleh Departemen Humas BEM FF UI'},
        {id: 2, judul: 'Page Niomic Testimoni (web App)',gambar:'https://reactjs.org/logo-og.png',keterangan:'Merupakan web yang dibuat khusus untuk melihat testimoni member dr niomic'},
        {id: 3, judul: 'Page Niomic Carreer (Web App)',gambar:'https://reactjs.org/logo-og.png',keterangan:'Merupakan web yang dibuat khusus untuk informasi lowongan kerja dari niomic'}
      ]);
    });
};
