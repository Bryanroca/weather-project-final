const gradosMaxFs = document.querySelectorAll('.grados-maximos-F');
const gradosMinFs = document.querySelectorAll('.grados-minimos-F');
gradosMaxFs.forEach(function (gradosMaxF) {
  gradosMaxF.style.display = "none";
});
gradosMinFs.forEach(function (gradosMinF) {
  gradosMinF.style.display = "none";
});

function gradosC() {
  document.getElementById('grados_farenheit').style.display = "none";
  document.getElementById('grados_celcius').style.display = "flex";

  const gradosMaxFs = document.querySelectorAll('.grados-maximos-F');
  const gradosMinFs = document.querySelectorAll('.grados-minimos-F');
  const gradosMaxCs = document.querySelectorAll('.grados-maximos-C');
  const gradosMinCs = document.querySelectorAll('.grados-minimos-C');

  gradosMaxFs.forEach(function (gradosMaxF) {
    gradosMaxF.style.display = "none";
  });
  gradosMinFs.forEach(function (gradosMinF) {
    gradosMinF.style.display = "none";
  });
  gradosMaxCs.forEach(function (gradosMaxC) {
    gradosMaxC.style.display = "flex"
  })
  gradosMinCs.forEach(function (gradosMinC) {
    gradosMinC.style.display = "flex"
  })
}


export default gradosC;
