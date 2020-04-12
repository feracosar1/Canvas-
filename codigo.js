var texto = document.getElementById ("texto_linea");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

//las funciones generales nunca deben ir dentro de las llaves ya que se
//limitarian solo a esas llaves por lo tanto deben ir siempre porfuera de estas
//ojala al inicio para tener mas orden.


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoPorClick ()
{


  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var xi, yf;
  var espacio = ancho /lineas

  for(l=0; l < lineas; l++)
   //importante agregar a la variable el doble mas para que le sume y finalice el ciclo
  {
    yi = espacio * l;
    xf = espacio * (l+1);
  dibujarLinea("red", 0, yi, xf, 300);
  }
  for(l=0; l < lineas; l++)

  {
    xi = espacio * l;
    yf = espacio * (l+1);
  dibujarLinea("black", xi, 0, 300, yf);
  }
  dibujarLinea("blue", 1,1,1,299);
  dibujarLinea("blue",1,299,299,299);
  dibujarLinea("blue",299,299,299,1);
  dibujarLinea("blue",299,1,1,1);

}
