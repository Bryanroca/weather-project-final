import { useState, useEffect } from 'react';
import '../styles_components/columna-izquierda.css';
import '@fortawesome/fontawesome-free/css/all.css';
import boton_abrir from './ocultar.js'
import boton_cerrar from './mostrar.js'
import extraer_informacion from './boton_lugar';
import guardar from './guardar'


const Columna_izquierda = () => {
  const [temp, setTemp] = useState(null);
  const [Conditions, setConditions] = useState(null)
  const [tempmin, setTempmin] = useState(null)
  const [Clima, setClima] = useState("")
  var myParamValue = guardar();
  const [celciusRedondeado, setCelciusRedondeado] = useState(null);
  const [state, setState] = useState([])

  const imagenes = {
    "Partially cloudy": "/images/cloud.png",
    "Rain, Overcast": "/images/rain.png",
    "Clear": "/images/clear.png",
    "Overcast": "images/Overcast.png",
    "Rain, Overcast": "/images/rain.png",
    "Rain, Partially cloudy": "/images/rain.png"
  };

  useEffect(() => {
    console.log(myParamValue)
    if (myParamValue === "") {
      myParamValue = "concepcion";

    }
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${myParamValue}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=CYM3ETKTDQMPEJT7KCELMJ5UB&options=beta&contentType=json`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const arrayRecortado = data.days.splice(0, 1);

        const formateado = arrayRecortado.map(day => {
          return {
            conditions: imagenes[day.conditions] || day.conditions,
            tempMax: day.tempmax,
            tempMin: day.tempmin,
            temp: day.temp,
            Celsius: ((day.temp - 32) / 1.8).toFixed(1)
          }

        })
        setState(formateado)
        setTemp(data.days[0].temp);
        setConditions(data.days[0].conditions)

        var subcoditions_rain = data.days[0].conditions.split(",")
        var subcoditions_rain = subcoditions_rain[0]

        var subcoditions_cloudy = data.days[0].conditions.split(",")
        var subcoditions_cloudy = subcoditions_cloudy[0]

        var subcoditions_overcast = data.days[0].conditions.split(",")
        var subcoditions_overcast = subcoditions_overcast[0]

        var subcoditions_clear = data.days[0].conditions.split(",")
        var subcoditions_clear = subcoditions_clear[0]

        if (data.days[0].conditions == "Partially cloudy" || data.days[0].conditions == "Partially cloudy") {
          setClima("/images/cloud.png")
        }
        if (data.days[0].conditions == "rain" || subcoditions_rain == "Rain") {
          setClima("/images/rain.png")
        }
        if (subcoditions_overcast == "Overcast" || subcoditions_cloudy == "cloudy") {
          setClima("/images/overcast.png")
        }
        if (subcoditions_clear == "Clear") {
          setClima("/images/clear.png")
        }
        var temperatura = data.days[0].temp
        var celcius = (temperatura - 32) / 1.8
        var celcius_redondeado = parseFloat(celcius.toFixed(1));

        setCelciusRedondeado(celcius_redondeado);


      });
  }, []);
  useEffect(() => {
    console.log(state[0]?.conditions);
    console.log(imagenes[state.conditions])
  }, [])


  let fecha = new Date();

  let diaMes = fecha.getDate();
  let diaSemana = fecha.getDay();
  let mes = fecha.getMonth();


  if (diaSemana == 0) {
    diaSemana = "Domingo"
  }
  if (diaSemana == 1) {
    diaSemana = "Lunes"
  }
  if (diaSemana == 2) {
    diaSemana = "Martes"
  }
  if (diaSemana == 3) {
    diaSemana = "Miercoles"
  }
  if (diaSemana == 4) {
    diaSemana = "Jueves"
  }
  if (diaSemana == 5) {
    diaSemana = "Viernes"
  }
  if (diaSemana == 6) {
    diaSemana = "Sabado"
  }
  if (mes == 0) {
    mes = "Enero"
  }
  if (mes == 1) {
    mes = "Febrero"
  }
  if (mes == 2) {
    mes = "Marzo"
  }
  if (mes == 3) {
    mes = "Abril"
  }
  if (mes == 4) {
    mes = "Mayo"
  }
  if (mes == 5) {
    mes = "Junio"
  }
  if (mes == 6) {
    mes = "Julio"
  }
  if (mes == 7) {
    mes = "Agosto"
  }
  if (mes == 8) {
    mes = "Septiembe"
  }
  if (mes == 9) {
    mes = "Ocubre"
  }
  if (mes == 10) {
    mes = "Noviembre"
  }
  if (mes == 11) {
    mes = "Diciembre"
  }


  return (
    <section className="columna-izquierda" id='columna-izquierda'>


      <div className="columna-iquierda-contenedor" id="columna-iquierda-contenedor">
        <button onClick={boton_abrir} className="lugares" id="Lugares">Buscar el lugar</button>
        <img id='imagen-location' className="location" src="/images/target.png" alt="" />
      </div>


      <div className='container-menu' id="container-menu">
        <div className='cont-menu'>
          <div className='container-x'>
            <i onClick={boton_cerrar} className="fa-solid fa-x"></i>

          </div>

          <div className='buscador'>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Buscar locación " className='buscador_barra' id="buscador_barra" />
            <button onClick={() => extraer_informacion("none")} className='buscador-boton'>Buscar</button>
          </div>
          <nav>
            <li onClick={() => extraer_informacion("london")} id="Londres">Londres</li>
            <li onClick={() => extraer_informacion("Barcelona")} id="Barcelona">Barcelona</li>
            <li onClick={() => extraer_informacion("Miami")} id="Miami">Miami</li>
          </nav>
        </div>
      </div>



      <div className="container-izquierda" id="container-izquierda">
        <img className="container-izquierda-icono" src={Clima} alt="" />

        <h1 className="grados" id="grados_farenheit">
          {state?.map(day => (
            <div className='container-imagen' key={day.key}>
              <h1>
                {day.temp}
                <span className="F"> °F </span>
              </h1>


            </div>
          ))}
        </h1>

        {state?.map(day => (
          <div key={day.key}>

            <h1 className='grados_celcius' id='grados_celcius'>
              {day.Celsius}
              <span className="C"> °C</span>
            </h1>

          </div>
        ))}



      </div>
      <div className="container-datos" id="container-datos">
        <h1 className="condicion">{Conditions}</h1>
        <h3>Fecha · {diaSemana} {diaMes} {mes}</h3> <h3></h3>
        {myParamValue ? (
          <p>          <img className="look" src="/images/location.png" alt="" />
            {myParamValue}</p>
        ) : (
          <p>          <img className="look" src="/images/location.png" alt="" />
            Chile, Concepción</p>
        )}
        <h3 className="ciudad"></h3>
      </div>

    </section>



  );
};

export default Columna_izquierda;
