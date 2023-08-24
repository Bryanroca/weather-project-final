function extraer_informacion(place) {

    if (place === "none") {
        const input = document.getElementById('buscador_barra');
        const userInput = input.value;
        window.location.href = `index.html?locacion=${userInput}`
    }
    else {
        window.location.href = `index.html?locacion=${place}`
    }


}

export default extraer_informacion