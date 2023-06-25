// Obtener elementos del DOM
var diaSemana = document.getElementById('diaSemana');
var dia = document.getElementById('dia');
var mes = document.getElementById('mes');
var year = document.getElementById('year');
var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var ampm = document.getElementById('ampm');

function actualizarHora() {
  var fecha = new Date(); // Obtener la fecha y hora actual

  // Obtener los componentes de la fecha
  var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  var mesActual = fecha.getMonth();
  var diaActual = fecha.getDate();
  var yearActual = fecha.getFullYear();
  var hora = fecha.getHours();
  var minuto = fecha.getMinutes();
  var segundo = fecha.getSeconds();
  var amPm = hora >= 12 ? 'PM' : 'AM';

  // Actualizar los elementos del DOM con la fecha y hora actual
  diaSemana.textContent = diasSemana[fecha.getDay()];
  dia.textContent = diaActual;
  mes.textContent = meses[mesActual]; 
  year.textContent = yearActual;
  horas.textContent = hora % 12 || 12; // Convertir la hora a formato de 12 horas
  minutos.textContent = minuto < 10 ? '0' + minuto : minuto; // Añadir un 0 delante si los minutos son menores a 10
  segundos.textContent = segundo < 10 ? '0' + segundo : segundo;
  ampm.textContent = amPm;
}

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);
