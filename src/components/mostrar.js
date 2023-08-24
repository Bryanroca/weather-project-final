function boton_cerrar() {
  document.getElementById('container-izquierda').style.display = 'flex';
  document.getElementById('container-datos').style.display = 'flex';
  document.getElementById('container-menu').style.display = 'none';
  const Boton = document.getElementById('Lugares');
  Boton.style.display = 'flex';
  const imagenURL = '../images/clouds.avif';

  document.getElementById('columna-izquierda').style.backgroundImage = `url(${imagenURL})`;
  document.getElementById('columna-iquierda-contenedor').style.backgroundColor = 'transparent'; 
  document.getElementById('container-datos').style.backgroundColor = 'transparent'; 
}

export default boton_cerrar;
