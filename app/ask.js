

// function donate() {
//   let money = prompt("How much can you donate?");
//   money = Number(money);
//   if ( money < 1) {  
//     let message = prompt("Would you like to reconsider? (yes/no)");
//     if (message == "yes"){
//      return donate();
//     }
//     else{return 0}
//   }
//   return money;
// }



// function question() {
//   let ask = prompt (" Do you want to save the Lions?");
//   if (ask == "yes") {
//     let money=donate();
//     console.log(money)
//     if (money>0){
//     message= " Fanstastic thanks for your support!!";
//     }
// } else {
//     message = " Only 1$ a month can go to saving the Lions! ";
// }
// document.write(message);
// }


function help() {

  let answer = prompt ("Will you donate to save the lions?(yes/no)");
  if (answer == "no"){
    document.write("Thanks for caring!");
    return;
  }
  if (answer == "yes"){
    money();
  } 
  else{ 
    message = "Will you reconsider?(yes/no)";
    if (answer == "yes");
    help()
  }  

}



function money(){
  let request = prompt("How much are you willing to donate?")
    request = Number(request)
  while ( request < 50){
    request = prompt(" Please consider donating more");
    request = Number(request);
  }
  for (let i = 1; i <= request; i=i+10){
document.write("😻Thank you for you're donation!😻")
  }
}

