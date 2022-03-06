// this script houses all the jquery comands and code to run the game 
$(document).ready(function () {
    $('#start').click(function(){// this code happens when you click the start button
        var username = $('#input_start_box').val();
        if (username == ""){
            $('#input_start_box').addClass("error_box");
            alert("Please enter your name"); // send an error alert in js
        }else{
            window.location="pages/home.html";
        }// redirect to page for the game
        
    }); 

    // this portion houses the game interactiveness
    // set values for each function clicked now in order not to make the script messy i would have to call the alogrithm
    // as fuctions in the code lol
    $('#u_score').text(user);
    $('#c_score').text(computer);
    $('#overlay4').hide();
    $('#overlay5').hide();
    $('#overlay6').hide();

    $('#overlay4').fadeIn(2000);
    $('#overlay4').fadeOut(2000);

    $('#user_rock').click(function () { 
        var u_input = "rock";
        var c_input=input[Math.floor(Math.random()*3)];
        
        //collect winner with function
        win=score(winner(c_input,u_input));
    });// code to run when user click rock

    $('#user_paper').click(function () { 
        var u_input = "paper";
        var c_input=input[Math.floor(Math.random()*3)];
        
        //collect winner with function
        win=score(winner(c_input,u_input));
        
    });// code to run when user click paper
    $('#user_scissors').click(function () { 
        var u_input = "scissors";
        var c_input=input[Math.floor(Math.random()*3)];
        
        //collect winner with function
        win=score(winner(c_input,u_input));
    });
});