//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
    if 
      (name === "Tyler") return true;
    
    else{
      return false;
    }
}

  //Code Here

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName(){
  return prompt("What is your name?");
  console.log;
}

  //Code Here


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
  alert("Welcome, " + getName()) 
}

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
  //peramiters are variables used in a methode or function, aguments are the data contained in a peramiter

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
 //false null nun nan o ""
 //make and if statment that allerts ==!  false


//Next Problem



//Create a function called myName that returns your name

  //Code Here
  function myName(){
    return("Sam");
  }
  


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;

//Now alert the result of invoking newMyName

alert (newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.
function outerFn(){
  return function(){
    return ('Sam');
  }
}
  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.
function innerFn(){
  var sam = this.outerFn();
  return "Sam";
}
  //Code Here

//Now invoke innerFn.
