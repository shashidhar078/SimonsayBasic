let userSeq=[];
let gameSeq=[];
let color=["yellow","red","purple","green"];
let heading=document.querySelector("h2");
gameState=false;
level=0;

document.addEventListener("keypress",function(event)
{
    if(gameState==false)
    {
        console.log("Game has started");
        console.log("you can play now");
        gameState=true;
        levelUp();
    }
})

function flashy(btn)
{
   btn.classList.add("white");
    setTimeout(function() {
        btn.classList.remove("white");
    }, 250);
}


function levelUp()
{
    level++;
    heading.innerText=`Level ${level}`;
    let rndIndx=Math.floor(Math.random()*3);
    let rndColor=color[rndIndx];
    let btn=document.querySelector(`.${rndColor}`);
    console.log(rndIndx);
    console.log(rndColor);
    console.log(btn);
    flashy(btn);
}

// let but1=document.querySelector("#but1");
// let but2=document.querySelector("#but2");
// let but3=document.querySelector("#but3");
// let but4=document.querySelector("#but4");
let btns=document.querySelectorAll(".box")


function bntPress(){
    console.log("Button was Pressed");
}

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

for(btn of btns)
{
    btn.addEventListener("click",bntPress);
}