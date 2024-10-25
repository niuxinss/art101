/**
 * Author: Mandy
 * Created: October 24 2024
 * 
 **/

// define variables

myTransport = ["car", "walking", "bus"]

// object for main ride
myMainRide = {
    make: "Awesomecar",
    model: "Cat",
    color: "Neon Green",
    year: 20024,
    //defining function in object (method)
    age: function() {
        return 2024 - this.year;
    }
}

//output

document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My main ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
