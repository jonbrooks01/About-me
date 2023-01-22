let ask = prompt (" Do you want to save the Lions?");
if (ask == "yes") {
    message= " Fanstastic thanks for your support!!";
} else {
    message = " Only 1$ a month can go to saving the Lions! ";
}
document.write(message);

let $ = prompt ("How much are can you donate?");
if ( $ > "0") {
    message= " Thank you for your donation!";
} else { 
    message = "Please reconsider!";   
} 
document.write(message);
