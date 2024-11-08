function tinhdiem(){
    let dvatly = +document.getElementById('dvatly').value;
    let dhoa = +document.getElementById('dhoa').value;
    let dsinh = +document.getElementById('dsinh').value;
    let tdiem = dvatly + dsinh + dhoa;
    let diemtb = tdiem/3;

    document.getElementById('result').innerHTML = "Điểm tổng của học sinh: " + tdiem + "<br/>" + "Điểm trung bình của học sinh: " + diemtb;
}

function chuyendoi(){
    let doC = +document.getElementById('doC').value;
    let doF = 9*doC / 5 + 32;
    document.getElementById('doF').innerHTML = doF + "&deg;F";
}