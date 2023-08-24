import React, { useState, useEffect } from "react";

export default function Logica() {
    const [state, setState] = useState([])
    const imagenes = {
        "Partially cloudy": "../images/cloud.png",
        "Rain, Overcast": "../images/rain.png",
        "Clear": "../images/clear.png",
        "Overcast": "../images/Overcast.png",
        "Rain, Overcast": "../images/rain.png"
    };
    useEffect(() => {
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mendiolaza?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=CYM3ETKTDQMPEJT7KCELMJ5UB&options=beta&contentType=json')
            .then(r => r.json())
            .then(data => {
                const arrayRecortado = data.days.splice(1, 5);
                const formateado = arrayRecortado.map(day => {
                    return {
                        conditions: imagenes[day.conditions] || day.conditions,
                        tempMax: day.tempmax,
                        tempMin: day.tempmin
                    }
                })
                setState(formateado)
            })
    }, []);
    return (
        <ul>
            {state?.map(day => (
                <li>
                    <img src={day.conditions}></img>
                    {day.tempMax}
                    {day.tempMin}
                </li>
            ))}
        </ul>
    )
}

