$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
$(document).ready(function(){
  $('.nama_mhs').click(function(){
      let isi = $(this).text();

      let isi2 = prompt('Ubah dengan:', isi);
      if(!isi2) return;

      $(this).text(isi2);
  });

  $('.hapus').click(function(){
      let yakin = confirm('Apakah anda yakin ingin menghapus?');
      if(!yakin) return;
      
      let id = $(this).prop('id');
      let rid = id .split('__');
      let baris_ke = rid[1];

      $('#row__'+baris_ke).slideUp();
  });

  $('.alamat').click(function (event) {
      alert("Anda mengklik kolom yang berisi kata " + $(this).html() + "!");
  });

  $("th").click(function (event) {
      alert("Anda mengklik kolom judul yang berisi kata " + $(this).html() + "!");
  });
});

function konfirmasiKembali(){
  var kembali = confirm("Apakah ingin kembali ke halaman utama?");

  if(kembali){
      window.location = "../index.html";
  }else{
      window.location = "tabel-3.html";
  }
}