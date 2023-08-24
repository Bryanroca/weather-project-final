let tempertara_maxima_F;

function gradosF(setcelciusMax, setcelciusMax2, setcelciusMax3, setcelciusMax4, setcelciusMax5, setCelciusMin, setCelciusMin_2, setCelciusMin_3, setCelciusMin_4, setCelciusMin_5, settempMax) {
  document.getElementById('grados_farenheit').style.display = 'flex';
  document.getElementById('grados_celcius').style.display = 'none';



  
  const gradosMaxFs = document.querySelectorAll('.grados-maximos-F');
  const gradosMinFs = document.querySelectorAll('.grados-minimos-F');
  const gradosMaxCs = document.querySelectorAll('.grados-maximos-C');
  const gradosMinCs = document.querySelectorAll('.grados-minimos-C');

  gradosMaxFs.forEach(function (gradosMaxF) {
    gradosMaxF.style.display = "flex";
  });
  gradosMinFs.forEach(function (gradosMinF) {
    gradosMinF.style.display = "flex";
  });
  gradosMaxCs.forEach(function(gradosMaxC){
    gradosMaxC.style.display = "none"
  })
  gradosMinCs.forEach(function(gradosMinC){
    gradosMinC.style.display = "none"
  })
}

export { tempertara_maxima_F };
export default gradosF;
