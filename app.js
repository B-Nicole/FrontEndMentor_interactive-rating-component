
var previous = null;
var buttonValue = 1;

function selectRaiting(objButton){  
    var name = "0" + objButton.value;   
    buttonValue = objButton.value;
    
    if(previous == null){ /* If the previous container is null we highlight it in orange as our selection*/
        document.getElementById(name).style.backgroundColor = '#fb7413';
        previous = name;
    }
    else{ /*If the previous container is not null and we make another selection we put the selection in orange and cancel out the previous selection */
        document.getElementById(name).style.backgroundColor = '#fb7413';
        document.getElementById(previous).style.backgroundColor = ' #7c8798';
        previous = name;
    }
}


function thankYouMsg(){
    //alert(buttonValue);
    document.getElementById("raitingContainer").style.display = "none"; 
    document.getElementById("thankYou").style.display = "inline-block"; 
 
 
    document.getElementById("userRaiting").innerHTML = buttonValue; /*Inner HTML is not good for security*/
}