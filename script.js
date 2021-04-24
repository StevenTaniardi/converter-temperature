function temperatureConverturefc(valueFahrenheitc) {
    valueFahrenheitc = parseFloat(valueFahrenheitc);
    document.getElementById("outputCelciusf").innerHTML=(valueFahrenheitc-32)/1.8;
}

function temperatureConverturecf(valueCelciusf) {
    valueCelciusf = parseFloat(valueCelciusf);
    document.getElementById("outputFahrenheitc").innerHTML=(valueCelciusf*1.8)+32;
}

function temperatureConvertureck(valueCelciusk) {
    valueCelciusk = parseFloat(valueCelciusk);
    document.getElementById("outputKelvinc").innerHTML=valueCelciusk+273;
}

function temperatureConverturekc(valueKelvinc) {
    valueKelvinc = parseFloat(valueKelvinc);
    document.getElementById("outputCelciusk").innerHTML=valueKelvinc-273;
}

function temperatureConverturefk(valueFahrenheitk) {
    valueFahrenheitk = parseFloat(valueFahrenheitk);
    document.getElementById("outputKelvinf").innerHTML=(valueFahrenheitk-32)*5/9+273;
}

function temperatureConverturekf(valueKelvinf) {
    valueKelvinf = parseFloat(valueKelvinf);
    document.getElementById("outputFahrenheitk").innerHTML=(valueKelvinf-273)*9/5+32;
}