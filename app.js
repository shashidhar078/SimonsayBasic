let userSeq=[];
let gameSeq=[];

gameState=false;
level=0;

document.addEventListener("keypress",function(event)
{
    if(gameState==false)
    {
        console.log("Game has started");
        console.log("you can play now");
        gameState=true;
    }
})