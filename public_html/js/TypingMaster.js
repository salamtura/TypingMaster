/* 
 * Typing Master
 * (c) Abdulsalam Umar
 * http://blog.salamtura.com
 * 
 */

var name;
var question;
var word;
var score;
var level;
var lines=new Array();//=['Fish','Goat','Pig','Jaki'];
var bombcount=0;
var jona_win=["Nigerians are safe","We are winning","Govt no be beans", "Militants better pass","Dame english sef can finish wuna"];
var jona_lose=["Silly police","You have to bear the burden","Ah... na wa ooo","Run for your safety","More budget for security please"];

$(document).ready(function(){ 
    init();
    $("#start").click(function(e){
        e.preventDefault();
        start();
    })
    $("#pause").click(function(){
        //pause();
        })
    $("#end").click(function(){
        end();
    })
});

function init(){
    $("#fsjobs").hide();
    $("#jona").hide();
}

function start(){    
    name=$("#name").val();// get name value
    question=$("#words").val();// get words
    score=0; // initial score
    level=1; // initial level
    bombcount=0; //initial bombs
    loadWords(question); // load words from file  
    $("#user_input").focus(); // set focus on  user input
    chase(level); //start the chase
}

function end(){
    //display modal result
    $("#fsjobs").modal();/*(function(){
        //add result content
        $(this).show();
        $("#finalscore").html(score);
    });*/
}

function chase(level){
    word=randomWord();
    //set word
    $("#phrase").html(word);
    //reset user input
    $("#user_input").val("");  
    //check user input event
    $("#user_input").keyup(function(event){
        var input = $("#user_input").val();    
        if(input==word){
            // win
            win();
            $("#car").stop(function(){
                $(this).css({
                    left:0
                });
            });
            $("#car").css({
                left:0
            });
            chase(level);
        }   
    });
    //run car towards checkpoint
    $("#car").animate({
        left: 1000
    },(level*5000),function(){
        $(this).css({
            left:0
        });
        lose();
        if(bombcount<=8){
            chase(level); 
        }else{
            //Game over
            
        }        
    });
}

function win(){
    $("#user_input").val("")
    score=parseInt($("#score").html()) + 10;
    $("#score").html(score);
    if (score % 100==0){
        level++;
        $("#level").html(level);
    //move+=20;
    }
    jonathan(true);
}

function lose(){
    bombcount+=1;
    $("#lose_objects ul").append('<li><div class="bomb"></div></li>');
    jonathan(false);
}

function loadWords(question){
    var s= new Array(); 
    $.get(question, function(data) {
        var str = data;
        s=str.split("\n"); 
        lines=str.split("\r\n");
    setTimeout(function(){
        
    }, 5000);

    //$("#test").html(s[0])
    //return s;
    });
}

function randomWord(){
    var size=lines.length;
    var random=Math.floor(Math.random()*(size-1)+1);    
    return lines[random];
    
}

function jonathan(bool){
    var random=Math.floor(Math.random()*(6));
    $("#jona").show();
    if(bool){
        $("#jona").html(jona_win[random]);
    }else{
        $("#jona").html(jona_lose[random]);
    }
}
