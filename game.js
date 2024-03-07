let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const genCompChoice=()=>{
    let chances=["rock",'paper',"scissor"];
    let indx= Math.floor(Math.random()*3);
    return chances[indx];
}
const Game=(userChoice)=>{
    //generate computers move
    const cmpChoice=genCompChoice();
    let display_userscore = document.querySelector("#user_score");
    let display_compscore = document.querySelector("#comp_score");
    console.log(`user choice=${userChoice}`);
    console.log(`computer choice=${cmpChoice}`);
    if(userChoice===cmpChoice){
        msg.style.backgroundColor="yellow";
        msg.style.color="black";
        msg.innerHTML="Tie"
    }
    if(userChoice==="rock" && cmpChoice==="paper"){
        compscore++;
        display_compscore.innerHTML=`${compscore}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
        msg.innerHTML="paper beats rock!You lose"
    }
    if(userChoice==="rock" && cmpChoice==="scissor"){
        userscore++;
        display_userscore.innerHTML=`${userscore}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        msg.innerHTML="rock beats scissor!You win"
    }

    if(userChoice==="paper" && cmpChoice==="rock"){
        userscore++;
        display_userscore.innerHTML=`${userscore}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        msg.innerHTML="paper beats rock!You win"
    }
    if(userChoice==="paper" && cmpChoice==="scissor"){
        compscore++;
        display_compscore.innerHTML=`${compscore}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
        msg.innerHTML="scissor beats paper!You lose"
    }

    if(userChoice==="scissor" && cmpChoice==="rock"){
        compscore++;
        display_compscore.innerHTML=`${compscore}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
        msg.innerHTML="rock beats scissor!You lose"
    }
    if(userChoice==="scissor" && cmpChoice==="paper"){
        userscore++;
        display_userscore.innerHTML=`${userscore}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        msg.innerHTML="scissor beats paper!You win"
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        Game(userChoice);
    })
});