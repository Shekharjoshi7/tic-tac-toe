let music = new Audio('/music.mp3')
let ting = new Audio('/ting.mp3')
let game = new Audio('/gameover.mp3')


let turn ="X"
let gameover=false;

//funtion to change turn
const changeTurn=()=>{
        return turn ==="X"?"0":"X"
}

//funtion to check win
const checkWin= ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText +" Won";
            gameover=true;
            game.play();
            document.getElementsByClassName('imgBox')[0].style = "width: 150px";
            
        }
        
    })
    
}
music.play();
//game logic
let Boxes= document.getElementsByClassName("box")
Array.from(Boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn =changeTurn();
            ting.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName('info')[0].innerText ="Turn for " + turn;
            }
        }
    })
})

//reset
let Reset=document.getElementById('reset');
Reset.addEventListener('click',()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    gameover=false;
    document.getElementsByClassName('info')[0].innerText ="Turn for " + turn;
    document.getElementsByClassName('imgBox')[0].style = "width: 0px";
    

})