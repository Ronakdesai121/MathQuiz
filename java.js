var playing = false;
var score;
var action;
var time;
var ans;

document.getElementById("reset").onclick =
    function(){
    if(playing == true){
        location.reload();
        
    }
    else{
        playing= true;
        score = 0;
    document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("time").style.display="block";
        time=60;
        document.getElementById("timevalue").innerHTML = time;
        hide("gameover");
        
        document.getElementById("reset").innerHTML = "Reset Game"
        
        startcount();
        generateQA();
    }
    
}
for(i=1;i<5;i++){
    
document.getElementById("b"+i).onclick = function(){
    if (playing == true){
        if(this.innerHTML == ans){
            score++;
            document.getElementById("scorevalue").innerHTML= score;
            show("correct");
            hide("wrong");
           setTimeout(function(){
               hide("correct");
           },1000); 
            
            generateQA();
            
            
            
        }
        else{
            show("wrong");
            hide("correct");
           setTimeout(function(){
               hide("wrong");
           },1000); 
            
            
        }
    }
    
}

}


















function startcount(){
    action = setInterval(function(){
        time -=1;
         document.getElementById("timevalue").innerHTML = time;
        if(time == 0){
           stopCount();
            document.getElementById("gameover").style.display="block";
             document.getElementById("gameover").innerHTML="<p> Game Over!!!</p> <p> Your score is " +score+ ".</p>";
            document.getElementById("time").style.display="none";
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("reset").innerHTML ="Start Game";
            
        }
        
    },1000);
    
}



function stopCount(){
     clearInterval(action);
}


function hide(Id){
    document.getElementById(Id).style.display="none";
}

function show(Id){
    document.getElementById(Id).style.display="block";
}
function generateQA(){
    var x = 1+Math.round(9*Math.random());
    var y = 1+Math.round(9*Math.random());
    ans = x*y;
    document.getElementById("quiz").innerHTML= x+"*"+y;
    var correctposition = 1+Math.round(3*Math.random());
    document.getElementById("b"+correctposition).innerHTML = ans;
    
    for(i=1;i<5;i++){
        if(i!= correctposition){
            var wrongans;
            do{
                wrongans = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
           }
           while(wrongans == ans)
            document.getElementById("b"+i).innerHTML = wrongans;
        }
    }
    
    
}