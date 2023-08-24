function guardar(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('locacion');
    return myParam;

}

guardar()

export default guardar