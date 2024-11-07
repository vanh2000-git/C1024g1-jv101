function addfunc(){
    let a = Number(document.getElementById('a').value);
    let b= Number(document.getElementById('b').value);
    let c = a + b;
    document.getElementById('result').innerHTML ="Kết quả:" + c;
}
function subfunc(){
    let a = Number(document.getElementById('a').value);
    let b= Number(document.getElementById('b').value);
    let c = a - b;
    document.getElementById('result').innerHTML ="Kết quả:" + c;
}
function multifunc(){
    let a = Number(document.getElementById('a').value);
    let b= Number(document.getElementById('b').value);
    let c = a * b;
    document.getElementById('result').innerHTML ="Kết quả:" + c;
}
function divfunc(){
    let a = Number(document.getElementById('a').value);
    let b= Number(document.getElementById('b').value);
    let c = a / b;
    document.getElementById('result').innerHTML ="Kết quả:" + c;
}