let curruntPlayer = "X";
let arrey = Array(9).fill(null);

function checkWinner() {
    if(
        ( arrey[0] !== null && arrey[0] == arrey[1] && arrey[1] == arrey[2]) ||
        ( arrey[3] !== null && arrey[3] == arrey[4] && arrey[4] == arrey[5]) ||
        ( arrey[6] !== null && arrey[6] == arrey[7] && arrey[7] == arrey[8]) ||
        ( arrey[0] !== null && arrey[0] == arrey[3] && arrey[3] == arrey[6]) ||
        ( arrey[1] !== null && arrey[1] == arrey[4] && arrey[4] == arrey[7]) ||
        ( arrey[2] !== null && arrey[2] == arrey[5] && arrey[5] == arrey[8]) ||
        ( arrey[0] !== null && arrey[0] == arrey[4] && arrey[4] == arrey[8]) ||
        ( arrey[2] !== null && arrey[2] == arrey[4] && arrey[4] == arrey[6]) 
    ){
        document.write(`Winner is ${curruntPlayer}`);
        return;
    }
    if (!arrey.some((e) => e === null)){
        document.write(`Draw!!`);
        return;
    }
}

function handleClick(el){
    const id = Number(el.id);
    if(arrey[id] !== null) return;
    arrey[id] = curruntPlayer;
    el.innerText = curruntPlayer;
    checkWinner();
    curruntPlayer = curruntPlayer === "X" ? "0" : "X";
}