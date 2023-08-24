function boton_abrir() {
  const containerIzquierda = document.getElementById('container-izquierda');
  const containerDatos = document.getElementById('container-datos');
  const containerMenu = document.getElementById('container-menu');
  const imagenLocation = document.getElementById('imagen-location');
  const Boton = document.getElementById('Lugares');
  const fondo = document.getElementById('columna-iquierda-contenedor');
  const izquierda_fondo_datos = document.getElementById('container-datos');
  const columna_izquierda = document.getElementById('columna-izquierda');

  containerIzquierda.style.display = 'none';
  containerDatos.style.display = 'none';
  containerMenu.style.display = 'flex';
  imagenLocation.style.display = 'none';
  Boton.style.display = 'none';
  fondo.style.backgroundColor = '#1E213A';
  columna_izquierda.style.backgroundImage = 'none';
  izquierda_fondo_datos.style.backgroundColor = '#1E213A';
  columna_izquierda.style.backgroundColor = '#1E213A';
  
}

export default boton_abrir;
