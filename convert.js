  var f = prompt("Enter Fahrenheit temperature");
        f = parseInt(f);
        var c = (f-32) * 5/9;
        c = parseInt(c);
        alert("Fahrenheit temperature is " + f 
		    + "\n\nCelsius temperature is " + c);