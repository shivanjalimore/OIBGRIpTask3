let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar() {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel() {
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}
function celTokel() {
    let output = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(output.toFixed(2));
    console.log(output);
}
function farTokel() {
    let output = ((parseFloat(fahrenheit.value) - 32)/1.8)+273.15;
    kelvin.value = parseFloat(output.toFixed(2));
    console.log(output);
}
function kelTocel() {
    let output = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}
function kelTofar() {
    let output = ((parseFloat(kelvin.value) - 273.15)*1.8) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
    console.log(output);
}
const reset = () => {
    document.querySelector("#celsius").value = " ";
    document.querySelector("#fahrenheit").value = " ";
    document.querySelector("#kelvin").value = " ";
}



