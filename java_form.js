function leer()
{
	//Referencia por pseudoclase
	var nom=document.forms["formulario"].elements[0].value;
	//Referencia por id
	var clave=document.getElementById("pass").value;
	document.getElementById("resultado").innerHTML="Tu nombre es: " +nom+ "\<br> Tu contraseña es: " +clave+
	"\<br> Eres de la carrera de: " +carrera1+ "\<br> Tu género es: " +gend;

	//Referencia por etiqueta
	var carrera1=document.getElementsByTagName("select")[0].value;

	//Referencia por name
	var gend=document.getElementsByName("genero");
	var g,i;
	for(i=0;i<gen.length;i++)
	{
		if(gen[i].checked)
			g=gen[i].value;
	}

	//Referencia por ID
	var ok=document.getElementById("casilla").checked;

	document.getElementById("resultado").innerHTML="Tu nombre es: "+nom
	+"\<br>Tu password es: "+clave+"Tu carrera es: "+carrera1+"\<br>Tu genero es: "+g;

}