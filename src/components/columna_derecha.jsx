import Targeta from "./targeta"
import Datos from './Container-datos.jsx'
import React, { useState, useEffect } from 'react';
import '../styles_components/columna-derecha.css'
import guardar from './guardar'
import gradosF from './gradosF'
import gradosC from "./gradosC";
import "../styles_components/targeta.css"
const Columna_derecha = () => {
  const [tempMax, settempMax] = useState(null)
  const [tempMax_2, settempMax_2] = useState(null)
  const [tempMax_3, settempMax_3] = useState(null)
  const [tempMax_4, settempMax_4] = useState(null)
  const [tempMax_5, settempMax_5] = useState(null)
  const [tempMin, settempMin] = useState(null)
  const [tempMin_2, settempMin_2] = useState(null)
  const [tempMin_3, settempMin_3] = useState(null)
  const [tempMin_4, settempMin_4] = useState(null)
  const [tempMin_5, settempMin_5] = useState(null)
  const [Viento, setViento] = useState(null)
  const [Visibilidad, setVisibilidad] = useState(null)
  const [Presion, setPresion] = useState(null)
  const [Humedad, setHumedad] = useState(null)
  const [imagen_1, setImagen1] = useState(null)
  const [imagen_2, setImagen2] = useState(null)
  const [imagen_3, setImagen3] = useState(null)
  const [imagen_4, setImagen4] = useState(null)
  const [imagen_5, setImagen5] = useState(null)
  const [celciusMin, setCelciusMin] = useState(null)
  const [celciusMax, setCelciusMax] = useState(null)
  const [celciusMin_2, setCelciusMin_2] = useState(null)
  const [celciusMax_2, setCelciusMax_2] = useState(null)
  const [celciusMin_3, setCelciusMin_3] = useState(null)
  const [celciusMax_3, setCelciusMax_3] = useState(null)
  const [celciusMin_4, setCelciusMin_4] = useState(null)
  const [celciusMax_4, setCelciusMax_4] = useState(null)
  const [celciusMin_5, setCelciusMin_5] = useState(null)
  const [celciusMax_5, setCelciusMax_5] = useState(null)

  let myParamValue = guardar();
  useEffect(() => {
    if (myParamValue === "") {
      myParamValue = "concepcion";
    }
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${myParamValue}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=CYM3ETKTDQMPEJT7KCELMJ5UB&options=beta&contentType=json`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        settempMax(data.days[1].tempmax)
        settempMax_2(data.days[2].tempmax)
        settempMax_3(data.days[3].tempmax)
        settempMax_4(data.days[4].tempmax)
        settempMax_5(data.days[5].tempmax)
        settempMin(data.days[1].tempmin)
        settempMin_2(data.days[2].tempmin)
        settempMin_3(data.days[3].tempmin)
        settempMin_4(data.days[4].tempmin)
        settempMin_5(data.days[5].tempmin)
        setViento(data.days[0].windspeed)
        setVisibilidad(data.days[0].visibility)
        setPresion(data.days[0].pressure)
        setHumedad(data.days[0].humidity)
        setImagen1(data.days[1].humidity)
        setCelciusMin(parseFloat(((data.days[1].tempmin - 32) / 1.8).toFixed(1)));
        setCelciusMax(parseFloat(((data.days[1].tempmax - 32) / 1.8).toFixed(1)));
        setCelciusMin_2(parseFloat(((data.days[2].tempmin - 32) / 1.8).toFixed(1)));
        setCelciusMax_2(parseFloat(((data.days[2].tempmax - 32) / 1.8).toFixed(1)));
        setCelciusMin_3(parseFloat(((data.days[3].tempmin - 32) / 1.8).toFixed(1)));
        setCelciusMax_3(parseFloat(((data.days[3].tempmax - 32) / 1.8).toFixed(1)));
        setCelciusMin_4(parseFloat(((data.days[4].tempmin - 32) / 1.8).toFixed(1)));
        setCelciusMax_4(parseFloat(((data.days[4].tempmax - 32) / 1.8).toFixed(1)));
        setCelciusMin_5(parseFloat(((data.days[5].tempmin - 32) / 1.8).toFixed(1)));
        setCelciusMax_5(parseFloat(((data.days[5].tempmax - 32) / 1.8).toFixed(1)));

        // variables para la targeta 1 

        var subImagen1_rain = data.days[1].conditions.split(",")
        var subImagen1_rain = subImagen1_rain[0]

        var subImagen1_cloudy = data.days[1].conditions.split(",")
        var subImagen1_cloudy = subImagen1_cloudy[0]

        var subImagen1_overcast = data.days[1].conditions.split(",")
        var subImagen1_overcast = subImagen1_overcast[0]

        var subImagen1_clear = data.days[1].conditions.split(",")
        var subImagen1_clear = subImagen1_clear[0]


        if (data.days[1].conditions == "Partially cloudy" || subImagen1_cloudy == "Cloud") {
          setImagen1("/images/cloud.png")
        }
        if (subImagen1_rain == "Rain") {
          setImagen1("/images/rain.png")
        }
        if (subImagen1_overcast == "Overcast") {
          setImagen1("/images/overcast.png")
        }
        if (subImagen1_clear == "Clear") {
          setImagen1("/images/clear.png")
        }
        // variables para la targeta 2

        var subImagen2_rain = data.days[2].conditions.split(",")
        var subImagen2_rain = subImagen2_rain[0]

        var subImagen2_cloudy = data.days[2].conditions.split(",")
        var subImagen2_cloudy = subImagen2_cloudy[0]

        var subImagen2_overcast = data.days[2].conditions.split(",")
        var subImagen2_overcast = subImagen2_overcast[0]

        var subImagen2_clear = data.days[2].conditions.split(",")
        var subImagen2_clear = subImagen2_clear[0]

        if (data.days[2].conditions == "Partially cloudy" || subImagen2_cloudy == "Cloud") {
          setImagen2("/images/cloud.png")
        }
        if (subImagen2_rain == "Rain") {
          setImagen2("/images/rain.png")
        }
        if (subImagen2_overcast == "Overcast") {
          setImagen2("/images/overcast.png")
        }
        if (subImagen2_clear == "Clear") {
          setImagen2("/images/clear.png")
        }
        // variables para la targeta 3
        var subImagen3_rain = data.days[3].conditions.split(",")
        var subImagen3_rain = subImagen3_rain[0]

        var subImagen3_cloudy = data.days[3].conditions.split(",")
        var subImagen3_cloudy = subImagen3_cloudy[0]

        var subImagen3_overcast = data.days[3].conditions.split(",")
        var subImagen3_overcast = subImagen3_overcast[0]

        var subImagen3_clear = data.days[3].conditions.split(",")
        var subImagen3_clear = subImagen3_clear[0]


        if (data.days[3].conditions == "Partially cloudy" || subImagen3_cloudy == "Cloud") {
          setImagen3("/images/cloud.png")
        }
        if (subImagen3_rain == "Rain") {
          setImagen3("/images/rain.png")
        }
        if (subImagen3_overcast == "Overcast") {
          setImagen3("/images/overcast.png")
        }
        if (subImagen3_clear == "Clear") {
          setImagen3("/images/clear.png")

        }
        // variable para la targeta 4
        var subImagen4_rain = data.days[4].conditions.split(",")
        var subImagen4_rain = subImagen4_rain[0]

        var subImagen4_cloudy = data.days[4].conditions.split(",")
        var subImagen4_cloudy = subImagen4_cloudy[0]

        var subImagen4_overcast = data.days[4].conditions.split(",")
        var subImagen4_overcast = subImagen4_overcast[0]

        var subImagen4_clear = data.days[4].conditions.split(",")
        var subImagen4_clear = subImagen4_clear[0]


        if (data.days[4].conditions == "Partially cloudy" || subImagen4_cloudy == "Cloud") {
          setImagen4("/images/cloud.png")
        }
        if (subImagen4_rain == "Rain") {
          setImagen4("/images/rain.png")
        }
        if (subImagen4_overcast == "Overcast") {
          setImagen4("/images/overcast.png")
        }
        if (subImagen4_clear == "Clear") {
          setImagen4("/images/clear.png")

        }
        // variable para la targeta 5
        var subImagen5_rain = data.days[5].conditions.split(",")
        var subImagen5_rain = subImagen5_rain[0]

        var subImagen5_cloudy = data.days[5].conditions.split(",")
        var subImagen5_cloudy = subImagen5_cloudy[0]

        var subImagen5_overcast = data.days[5].conditions.split(",")
        var subImagen5_overcast = subImagen5_overcast[0]

        var subImagen5_clear = data.days[5].conditions.split(",")
        var subImagen5_clear = subImagen5_clear[0]


        if (data.days[5].conditions == "Partially cloudy" || subImagen5_cloudy == "Cloud") {
          setImagen5("/images/cloud.png")
        }
        if (subImagen5_rain == "Rain") {
          setImagen5("/images/rain.png")
        }
        if (subImagen5_overcast == "Overcast") {
          setImagen5("/images/overcast.png")
        }
        if (subImagen5_clear == "Clear") {
          setImagen5("/images/clear.png")

        }


        // logica de los titulos de las targetas

      });
  }, []);
  var fecha = new Date();
  var diaSemana = fecha.getDay();


  if (diaSemana == 0) {
    var diaSemana = "Martes"
    var diaSemana2 = "Miercoles"
    var diaSemana3 = "Jueves"
    var diaSemana4 = "Viernes"
  }
  if (diaSemana == 1) {
    diaSemana = "Miercoles"
    diaSemana2 = "Jueves"
    diaSemana3 = "Viernes"
    diaSemana4 = "Sabado"
  }
  if (diaSemana == 2) {
    diaSemana = "Jueves"
    diaSemana2 = "Viernes"
    diaSemana3 = "Sabado"
    diaSemana4 = "Domingo"
  }
  if (diaSemana == 3) {
    diaSemana = "Viernes"
    diaSemana2 = "Sabado"
    diaSemana3 = "Domingo"
    diaSemana4 = "Lunes"
  }
  if (diaSemana == 4) {
    diaSemana = "Sabado"
    diaSemana2 = "Domingo"
    diaSemana3 = "Lunes"
    diaSemana4 = "Martes"
  }
  if (diaSemana == 5) {
    diaSemana = "Domingo"
    diaSemana2 = "Lunes"
    diaSemana3 = "Martes"
    diaSemana4 = "Miercoles"
  }
  if (diaSemana == 6) {
    diaSemana = "Lunes"
    diaSemana2 = "Martes"
    diaSemana3 = "Miercoles"
    diaSemana4 = "Jueves"
  }
  if (diaSemana == 7) {
    diaSemana = "Martes"
    diaSemana2 = "Miercoles"
    diaSemana3 = "Jueves"
    diaSemana4 = "Viernes"
  }

  return (
    <div className="container-columna-derecha">
      <section className="columna-derecha">
        <div className="columna-derecha-navbar">
          <h1 id="grados_C" onClick={() => gradosC()}>°C</h1>
          <h1 id="grados_F" onClick={() => gradosF()}>°F</h1>
        </div>
        <div className="parte-superior">
          <Targeta gradosMax={tempMax} gradosMin={tempMin} imagen={imagen_1} celciusMaxRedondeado={celciusMax} celciusMinredondeado={celciusMin} />
          <Targeta id="targeta-2" gradosMax={tempMax_2} gradosMin={tempMin_2} imagen={imagen_2} dia={diaSemana} celciusMaxRedondeado={celciusMax_2} celciusMinredondeado={celciusMin_2} />
          <Targeta gradosMax={tempMax_3} gradosMin={tempMin_3} imagen={imagen_3} dia={diaSemana2} celciusMaxRedondeado={celciusMax_3} celciusMinredondeado={celciusMin_3} />
          <Targeta gradosMax={tempMax_4} gradosMin={tempMin_4} imagen={imagen_4} dia={diaSemana3} celciusMaxRedondeado={celciusMax_4} celciusMinredondeado={celciusMin_4} />
          <Targeta gradosMax={tempMax_5} gradosMin={tempMin_5} imagen={imagen_5} dia={diaSemana4} celciusMaxRedondeado={celciusMax_5} celciusMinredondeado={celciusMin_5} />
        </div>

        <Datos viento={Viento} Visibilidad={Visibilidad} aire={Presion} Humedad={Humedad} />
      </section>
    </div>
  );

}

export default Columna_derecha 