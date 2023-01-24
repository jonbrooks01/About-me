

function donate() {
  let money = prompt("How much can you donate?");
  money = Number(money);
  if ( money < 1) {  
    let message = prompt("Would you like to reconsider? (yes/no)");
    if (message == "yes"){
     return donate();
    }
    else{return 0}
  }
  return money;
}



function question() {
  let ask = prompt (" Do you want to save the Lions?");
  if (ask == "yes") {
    let money=donate();
    console.log(money)
    if (money>0){
    message= " Fanstastic thanks for your support!!";
    }
} else {
    message = " Only 1$ a month can go to saving the Lions! ";
}
document.write(message);
}