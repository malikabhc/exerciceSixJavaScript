//Déclaration de la fonction
function division () {
//Déclaration des variables
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var regex = /^[\d]+[.1]?[\d]*$/;
// Boîte de dialogue avec appel des variables
if((regex.test(firstNumber) == true) && (regex.test(firstNumber) == true)) {
  var result = firstNumber % secondNumber;
  alert(result);
}else{
  alert('Incorrect');
}
}
