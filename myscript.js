function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    
    var convertedTemperature;
    var resultUnit;
    
    if (unit === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        resultUnit = "Fahrenheit";
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        resultUnit = "Celsius";
    }
    
    document.getElementById("convertedTemperature").innerHTML = temperature + " " + unit + " is " + convertedTemperature.toFixed(2) + " " + resultUnit;
}