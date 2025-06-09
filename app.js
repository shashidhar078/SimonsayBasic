let userSeq=[];
let gameSeq=[];
let color=["yellow","red","purple","green"];
let heading=document.querySelector("h2");
gameState=false;
level=0;
let gmSt=false;
let highestScore=0;
 document.querySelector("body").style.backgroundColor="#45B8AC";

document.addEventListener("keypress",function(event)
{
    if(gmSt==false)
    {
        if(gameState==false)
        {
            console.log("Game has started");
            console.log("you can play now");
            gameState=true;
            levelUp();
        }
    gmSt=true;
    }
    
})

let stBtn=document.querySelector("#start");
if(gmSt==false)
{
    stBtn.addEventListener("click",function(){
    if(gameState==false)
    {
        console.log("Game has started");
        console.log("you can play now");
        gameState=true;
        levelUp();
    } 
    gmSt=true; 
})
}


function flashy(btn)
{
   btn.classList.add("white");
    setTimeout(function() {
        btn.classList.remove("white");
    }, 250);
}


function levelUp()
{
    userSeq=[];
    level++;
    heading.innerText=`Level ${level}`;
    let rndIndx=Math.floor(Math.random()*3);
    let rndColor=color[rndIndx];
    let btn=document.querySelector(`.${rndColor}`);
    gameSeq.push(rndColor);
    flashy(btn);
}

// let but1=document.querySelector("#but1");
// let but2=document.querySelector("#but2");
// let but3=document.querySelector("#but3");
// let but4=document.querySelector("#but4");

// but1.addEventListener("click",function(){
//     console.log("Button1 was pressed!!")
//     flashy(but1);
// })
// but2.addEventListener("click",function(){
//     console.log("Button2 was pressed!!")
//     flashy(but2);
// })
// but3.addEventListener("click",function(){
//     console.log("Button3 was pressed!!")
//     flashy(but3);
// })
// but4.addEventListener("click",function(){
//     console.log("Button4 was pressed!!")
//     flashy(but4);
// })
function checkAns(idx)
{
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000)
        }
    }
    else{
        heading.innerHTML=`Game Over ! your score : ${level}<br><br>Press any key to Start Again`;  
        if(highestScore<level)
        {
            highestScore=level;
            heading.innerHTML=`Congratualations! your new highest score : ${highestScore} <br><br>Press any key to Start Again`;
        }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#45B8AC";
        },150); 
        reset(); 
    }
}

function bntPress(){
    console.log("Button was Pressed");
    let btn=this;
    flashy(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}


let btns=document.querySelectorAll(".box")
for(btn of btns)
{
    btn.addEventListener("click",bntPress);
}

function reset(){
    gameState=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}