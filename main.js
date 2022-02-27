const pindah = document.querySelectorAll(".konten1 .slide");
const pindah2 = document.querySelectorAll(".konten1-1 .slide2");


const delay = 5000;
let jumlahgambar = 0; 

pindah[jumlahgambar].style.opacity = 1;
pindah2[jumlahgambar].style.opacity = 1;

setInterval(nextImage, delay);

function nextImage() {

pindah[jumlahgambar].style.opacity = 0;
pindah2[jumlahgambar].style.opacity = 0;

jumlahgambar = (jumlahgambar+1) % pindah.length;
jumlahgambar = (jumlahgambar+1) % pindah2.length;

pindah[jumlahgambar].style.opacity = 1;
pindah2[jumlahgambar].style.opacity = 1;
}