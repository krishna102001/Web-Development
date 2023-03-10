// Generating a random number for player 1 and storing in randomNumber1 variable
var randomNumber1=Math.floor((Math.random())*6);

// adding with 1 so we can get random number between 1-6.
randomNumber1=randomNumber1 + 1; 

// adding a randomNumber1 in firstImageSrc so we can get a random images of dice.
var firstImageSrc="images/dice"+randomNumber1+".png";

// Now setting a attribute so we can change the image whenever we refresh the webpage
document.querySelector("img.img1").setAttribute("src",firstImageSrc);

// Generating a random number for player 2 and storing in randomNumber2 variable
var randomNumber2=Math.floor((Math.random())*6);

// adding with 1 so we can get random number between 1-6.
randomNumber2=randomNumber2 + 1; 

// adding a randomNumber2 in firstImageSrc so we can get a random images of dice.
var secondImageSrc="images/dice"+randomNumber2+".png";

// Now setting a attribute so we can change the image whenever we refresh the webpage
document.querySelector("img.img2").setAttribute("src",secondImageSrc);

                         // RESULTS decalration
//create a function which take two agrument and compare which is greater and smaller... 
//announce the result accordingly...
function result(playerFirstNumber,playerSecondNumber){
    if(playerFirstNumber>playerSecondNumber){
        return "Player 1 Win !";
    }
    else if(playerFirstNumber<playerSecondNumber){
        return "Player 2 win !"
    }
    else{
        return "Draw!"
    }
}

//accesing the html element using query selector and storing in resultText...
var resultText=document.querySelector("h1");

// Now modifying the h1 tag element by calling the result()...
resultText.innerHTML=result(randomNumber1,randomNumber2);