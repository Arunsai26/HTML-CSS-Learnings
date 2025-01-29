var msg1=document.querySelector('#msg1');
var msg2=document.querySelector('#msg2');
var msg3=document.querySelector('#msg3');
let result=Math.floor(Math.random()*10)-1;
let no_of_guesses=0;

function play(){
    var user_guess=documnet.querySelector("#guess").value;
    if(user_guess<1 || user_guess>10){
        alert("enter your number between 1-10")
    }
 else {

    no_of_guesses++
    if(user_guess<result){
        document.querySelector('#msg1').innerText=`Your guess is low`
        document.querySelector('#msg2').innerText=`Your guesses are :${no_of_guesses}`
        
    }else if(user_guess>result){
        document.querySelector('#msg1').innerText=`Your guess is high`
        document.querySelector('#msg2').innerText=`Your guesses are :${no_of_guesses}`
    }
    else if(user_guess === result){
        document.querySelector('#msg1').innerText=`Your guess is right`
        document.querySelector('#msg2').innerText=`Your guesses are :${no_of_guesses}`
        document.querySelector('#msg2').innerText=`Your guesses are :${result}`
    }
    

     }
}