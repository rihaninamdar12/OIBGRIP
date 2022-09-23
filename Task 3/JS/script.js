function convertion() {
    // Accessing User input
    let Value = document.getElementById("degree").value;

    // Declaring variable for o/p
    let display_result = 0;

    // Accessing Temperature type
    let selected_type = document.getElementById("type").value;

    let result = 0;

    // Validating user input 
    if (isNaN(Value)) {
        alert("Enter a Valid Number");
    }
    else {
        Value = Number.parseInt(Value);
    }

    // Conversion of Celcius to Fahrenheit
    if (selected_type == "C-F" && !isNaN(Value)) {
        result = ((Value * 9 / 5) + 32).toFixed(4);
        result = result + " ℉";
        display_result = document.getElementById("output").value = result;
    }

    // Conversion of Celcius to Kelvin
    else if (selected_type == "C-K" && !isNaN(Value)) {
        result = (Value + 273.15).toFixed(4);
        result = result + " K";
        display_result = document.getElementById("output").value = result;
    }

    // Conversion of Fahrenheit to Celcius
    else if (selected_type == "F-C" && !isNaN(Value)) {
        result = ((Value - 32) * 5 / 9).toFixed(4);
        result = result + " ℃";
        display_result = document.getElementById("output").value = result;
    }

    // Conversion of Fahrenheit to Kelvin
    else if (selected_type == "F-K" && !isNaN(Value)) {
        result = (((Value - 32) * 5 / 9) + 273.15).toFixed(4);
        result = result + " K";
        display_result = document.getElementById("output").value = result;
    }

    // Conversion of Kelvin to Celcius
    else if (selected_type == "K-C" && !isNaN(Value)) {
        result = (Value - 273.15).toFixed(4);
        result = result + " ℃";
        display_result = document.getElementById("output").value = result;
    }

    // Conversion of Kelvin to Fahrenheit
    else if (selected_type == "K-F" && !isNaN(Value)) {
        result = (((Value - 273.15) * 9 / 5) + 32).toFixed(4);
        result = result + " ℉";
        display_result = document.getElementById("output").value = result;
    }



}