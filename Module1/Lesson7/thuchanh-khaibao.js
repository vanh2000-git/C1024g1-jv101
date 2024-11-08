let i = 10;
let f = 20.5;
let b = true;
let s = "Hà Nội";

document.write('i =' + i + "<br/>")
document.write('f =' + f + "<br/>")
document.write('i =' + b + "<br/>")
document.write('i =' + s + "<br/>")
document.write("<br/>")

let width = 20;
let height = 20;
let area = width * height;

document.write("diện tích hình chữ nhật:" + area);

let a =+prompt("nhập vào số a:");
let c =+prompt("nhập vào số b:");

if (a%c == 0){
    alert("a là bội số của b");
}
else {
    alert("a không là bội số của b");
}
