var gender = document.getElementById('gender');
var born = document.getElementById('born');
var Name = document.getElementById('Name');
var song = document.getElementById('song');
var datos = document.getElementById('datos')

datos.addEventListener('click', () => {
    var genero = prompt('Género musical')

    gender.textContent = genero

    var año = prompt('Año de Creación')
    born.innerText = año

    var album = prompt('Primer Album')
    Name.innerText = album

    var cancion = prompt('Primera canción conocida por ti')
    song.innerText = cancion

})
/* function datos() {
    var genero = prompt('Género musical')

    gender.textContent = genero

    var año = prompt('Año de Creación')
    born.innerText = año

    var album = prompt('Primer Album')
    name.innerText = album

    var cancion = prompt('Primera canción conocida por ti')
    song.innerText = cancion



} */