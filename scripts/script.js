
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  

// set variables for two users
var username="";//so user could input user name
var computer=0;
var user=0;
//set the array that hold the game properties for the  game
const input = ['rock','paper','scissors']; 

// some if statements to check the user inputs and dind the winner

function winner(c_input,u_input){

    //alorgithm 
    if(c_input=="rock" && u_input=="rock"){
        var winner ="draw";// checks if both uses rock

    }
    else if(c_input=="rock" && u_input=="paper"){
        var winner="user";
 
    }
    else if(c_input=="rock" && u_input=="scissors"){
        var winner="computer";

    }// completed validation if computer is rock now do the same for others lol
    
    if(c_input=="scissors" && u_input=="scissors"){
        var winner ="draw";

    }
    else if(c_input=="scissors" && u_input=="rock"){
        var winner="user";

    }
    else if(c_input=="scissors" && u_input=="paper"){
        var winner="computer";

    }//completed validation if computer is scissors
    
    if(c_input=="paper" && u_input=="paper"){
        var winner ="draw";
// checks if both uses rock
    }
    else if(c_input=="paper" && u_input=="scissors"){
        var winner="user";

    }
    else if(c_input=="paper" && u_input=="rock"){
        var winner="computer";

    }//completed validation if user is paper

    sleep(2000);
    return winner;
}
 
//function to change score
function score(win_val){
    if(win_val=="user"){
        user++;
        $('#u_score').text(user);
        $('#overlay5').fadeIn(1000);
        $('#overlay5').fadeOut(1000);
    }
    else if(win_val=="computer"){
        computer++;
        $('#c_score').text(computer);
        $('#overlay6').fadeIn(1000);
        $('#overlay6').fadeOut(1000);
    }
    else if(win_val=="draw"){
        $('#overlay7').fadeIn(1000);
        $('#overlay7').fadeOut(1000);
    }

}

//fuction to hide the non picked 


