function calc(){
    const f1 = document.getElementById("total").value;
    const f2 = document.getElementById("rate").value; 
    if(f1.length == 0  && f2.length == 0 && f1.match(/[a-z]/i))
    {
     document.getElementById("tip").innerHTML = "$"+f1.length.toFixed(2);
     document.getElementById("tax").innerHTML = "$"+f2.length.toFixed(2);
     document.getElementById("grandt").innerHTML="Entered values are not valid";
    }
    else
    {
    const ti = parseFloat(f2)*parseFloat(f1)/100;
    document.getElementById("tip").innerHTML = "$"+ti.toFixed(2);
    const ta = (5.5/100)*parseFloat(f1);
    document.getElementById("tax").innerHTML = "$"+ta.toFixed(2);
    const grndt = ti+ta+parseFloat(f1);
    document.getElementById("grandt").innerHTML="$"+grndt.toFixed(2);  
    }
}
