function operation() {
    var x = document.getElementById("Num1").value;
    var y = document.getElementById("Num2").value;
    console.log(x, y);


    let a = document.getElementById("dropdown").value;
    console.log(a);

    switch (a) {
        case "add":
            console.log(parseInt(x) + parseInt(y));
            return "Addition is : " + (parseInt(x) + parseInt(y));
            break;

        case "subtract":
            console.log(parseInt(x) - parseInt(y));
            return "Subtraction is : " + (parseInt(x) - parseInt(y));
            break;

        case "multiply":
            console.log(parseInt(x) * parseInt(y));
            return "Multiplication is : " + (parseInt(x) * parseInt(y));
            break;

        case "divide":
            console.log(parseInt(x) / parseInt(y));
            return "Division is : " + (parseInt(x) / parseInt(y));
            break;


    }



}
let z = document.getElementById("submit");

function fun() {
    document.getElementById('demo').innerHTML = null;
    document.getElementById('Num1').value = null;
    document.getElementById('Num2').value = null;
    document.getElementById('dropdown').value = "add";

}