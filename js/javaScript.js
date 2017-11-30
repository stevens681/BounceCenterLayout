var val = true; //Boolean
var test; //Holds the x value from html

//This function sets the values for the menu and the icon
function myFunction(x) {

    if (val) {
        document.getElementById("myNav").style.height = "50%";
        val = false;
    }
        else {
            document.getElementById("myNav").style.height = "0%";
            val = true;
     }
    x.classList.toggle("change");
    return test = x;
}

//This is the function for the closebtn
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    val = true;
    test.classList.toggle("change");
}
