function costo(){
    var costoHora = document.getElementById('costoHora').value
    var horas = document.getElementById('horasTotales').value;
    var minutos = document.getElementById('minTotales').value;

    minutosTotales = parseInt(minutos) * (1/60);
    resultado = parseInt(costoHora) * (parseInt(horas) + minutosTotales);
    document.getElementById('precio').innerText = 'Usted debe pagar ' + Math.round(resultado) + ' pesos'
}