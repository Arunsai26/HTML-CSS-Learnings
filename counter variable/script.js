let counter=0;
const countervalue=document.querySelector("#counter-value")
function increase(){
    counter++;
    countervalue.innerHTML=counter;
}
function decrease(){
    counter--;
    countervalue.innerHTML=counter;
}
function Clear(){
    counter=0;
    countervalue.innerHTML=counter;
}