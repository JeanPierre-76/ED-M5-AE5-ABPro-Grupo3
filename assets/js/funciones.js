document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('ingrese su nombre');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
      alert('ingrese su apellido');
      return;
    }
    var ciudad = document.getElementById('ciudad').value;
    if (ciudad.length == 0) {
      alert('ingrese su ciudad');
      return;
    }
    var region = document.getElementById('region').value;
    if (region.length == 0) {
      alert('ingrese su región');
      return;
    }
    var codigopostal = document.getElementById('codigopostal').value;
    if (codigopostal.length < 6) {
      alert('código postal inválido');
      return;
    }
    var requerimiento = document.getElementById('requerimiento').value;
    if (requerimiento.length == 0) {
      alert('ingrese su requerimiento');
      return;
    }
    this.submit();
  }