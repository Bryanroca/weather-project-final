import "../styles_components/datos.css"

const Datos = ({ viento, Humedad, Visibilidad, aire }) => {
    return (
        <>
            <h1 className="clima">Clima de hoy</h1>

            <div className="container_datos_derecha">
                <div className="container_datos_derecha_superior">
                    <div className="primera-div">
                        <p>Estado del viento</p>
                        <h1>{viento} 7mph</h1>
                        <div className="img_primer_div">

                            <img className="navigation" src="images/navigation.png" alt="" /> <span>SWS</span>
                        </div>
                    </div>
                    <div className="segundo-div">
                        <p>Humedad</p>
                        <h1>{Humedad}%</h1>
                        <div className="barra">
                            <div className="barra-numeros">
                                <p>0</p>
                                <p>50</p>
                                <p>100</p>
                            </div>
                            <div className="progreso" style={{ width: `${Humedad}%` }}  >.</div>
                            <p className="porcentaje">%</p>
                        </div>
                    </div>
                </div>
                <div className="container_datos_derecha_inferior">
                    <div className="tercer-div">
                        <p>Visibilidad</p>
                        <h1><span>{Visibilidad}</span> Millas</h1>
                    </div>
                    <div className="cuarto-div">
                        <p>Presion del aire</p>
                        <h1><span>{aire}</span>mb</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Datos