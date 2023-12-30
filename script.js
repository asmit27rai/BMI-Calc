function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (!isNaN(weight) && !isNaN(height)) {
        let result = weight / (height * height);
        document.getElementById('result').value = result.toFixed(2);
    } else {
        alert("Please enter valid numbers for weight and height.");
    }
}
function Reset(){
    document.getElementById("weight").value=null;
    document.getElementById("height").value=null;
    document.getElementById("result").value=null;
}