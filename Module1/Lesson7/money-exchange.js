function convfunc(){
    let a = +document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;
    if (from == "VND" && to == "VND"){
        result = a + "vnd";
    } else if (from == "VND" && to == "USD"){
        result = a / 23000 + "$";
    } else if (from == "USD" && to == "USD"){
        result = a + "$";
    } else {
        result = a * 23000 + "vnd";
    }
    document.getElementById("result").innerHTML = result;
}