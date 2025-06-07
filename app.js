let userSeq=[];
let gameSeq=[];

gameState=false;
level=0;

document.addEventListener("keypress",function(event)
{
    if(gameState==false)
    {
        console.log("Game started");
        gameState=true;
    }
})