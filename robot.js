var daxil = document.getElementById("ad");
var enter = document.getElementById("soyad");
var netice = document.getElementById("netice");
daxil.disabled = true;
enter.disabled = true;
var ilkeded = document.getElementById("ilkEded");
var soneded = document.getElementById("sonEded");
var operator = document.getElementById("operator");
var result =0;
var hesab = ["x", "-", "+"];
var son = "";
var interval = setInterval(function() {
    ilkeded.innerText = Math.floor((Math.random() * 10));
    soneded.innerText = Math.floor((Math.random() * 10));
    var sec = Math.floor((Math.random()*3))
    son = hesab[sec];
    operator.innerText = son;
   
}, 1000)

if (son==hesab[0]) {
    result = ilkeded * soneded;
    console.log(result);
} else if (son==hesab[1]) {
    result = ilkeded - soneded;
    console.log(result);
}
else if (son==hesab[2]) {
    result = ilkeded + soneded;
    console.log(result);
}

if (netice.value == result) {
    // daxil.disabled = false;
    // enter.disabled = false;
}




