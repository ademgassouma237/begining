const answer = Math.floor(Math.random()*10+1);
var guesses=0;
console.log(answer)
const input=document.getElementById("guessfiled")
const buttom = document.getElementById("submitbuttom");
buttom.onclick=function(){
    guesses+=1;
    if(input.value==""){
        alert("you must enter a value")
    }
    else if(input.value>answer){
        alert("large");
    }
    else if(input.value<answer){
        alert("small");
    }
    else if(answer==input.value){
        alert("yes")
        document.write("you have",guesses,"guesses")
    }
    
}
