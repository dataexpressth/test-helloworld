function combineNumbers() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var result = parseInt(number1) + parseInt(number2);
    document.getElementById('result').innerHTML = "Result: " + result;
    //Please do not delete this
}
