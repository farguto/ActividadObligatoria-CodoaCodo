function validarForm(formulario){
  var x = document.getElementById("email")
  var y=  document.getElementById("password")

  if (x.value == ""||x.value.indexOf('@', 0) == -1) {
  alert("Falta el arroba en el usuario")
  return false
  }
  if(y.value=="") {
  alert("Falta colocar la contraseña")
  return false
  }
  else {
    alert("Sus datos han sido enviados correctamente");
    document.formulario.submit()
    return true
  }
}
