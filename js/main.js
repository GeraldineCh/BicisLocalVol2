function validateForm(){

	 var nombre = document.getElementById("name").value;
	 var apellido = document.getElementById("lastname").value;
	 var contrasena = document.getElementById("input-password").value;
	 var correo = document.getElementById("input-email").value;
	 var modelo = document.getElementsByClassName("form-control").value;

	 if(nombre == ""){
		getElementById("no-name").style.display = "block";
		return false;
	}
	else if(/([A-ZÑÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+/.test(nombre) == false){
		getElementById("no-name").style.display = "block";
		getElementById("no-name").innerHTML = " Primera letra en mayúscula";
		return false;
	}
		else{
			getElementById("no-name").style.display = "none";
			}

	  

	  if(!apellido.match(/[A-Z]{1,}[a-z]+/)){
	    document.getElementById('no-lastname').style.display = "none";
	  }
	  else {document.getElementById('no-lastname').style.display = "block";} }

	  if(!correo.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/)){
	    alert("Estructura de correo no válida: \n Ingresar email@domain.com");
	  }

	  if(contrasena.length < 6 || contrasena == "password" || contrasena == "123456" || contrasena == "098754"){
	    alert("Estructura de contraseña no válida: \n Ingresar contraseña de 6 caracteres");
	  }

}