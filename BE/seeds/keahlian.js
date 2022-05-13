
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('kealian').del()
    .then(function () {
      // Inserts seed entries
      return knex('kealian').insert([
        {id: 1, judul: 'Next Js' , gambar: 'https://pagepro.co/blog/wp-content/uploads/2021/02/nextjspicture.png' , keterangan: 'Next.js adalah framework untuk React.js yang cocok untuk membuat website dengan berbagai fitur unggulan seperti Routing Pages dan Fast Refresh. Proses membangun website jadi lebih mudah dan mampu menghasilkan performa yang optimal.'},
        {id: 2, judul: 'React JS' , gambar: 'https://www.teahub.io/photos/full/88-884422_angular-react-vue-2019.jpg', keterangan: 'React JS adalah library JavaScript yang biasa digunakan saat membangun UI suatu website atau aplikasi web. Jadi, React JS bisa dianggap seperti perpustakaan yang berisi berbagai kode JavaScript yang sudah tertulis (pre-written). Anda tinggal mengambil kode yang ingin Anda gunakan'},
        {id: 3, judul: 'Express JS' , gambar: 'https://wallpapercave.com/wp/wp6606918.jpg',keterangan: 'Express.js adalah framework web app untuk Node.js yang ditulis dengan bahasa pemrograman JavaScript. Framework open source ini dibuat oleh TJ Holowaychuk pada tahun 2010 lalu'}
      ]);
    });
};
