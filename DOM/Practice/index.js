// document.querySelector("h1").innerHTML="good bye";

// we can select an element in different Ways

// 1. by TagName
// document.getElementsByTagName("")     --> this get the all specifc element which we have given and store that in ARRAY form. 

// 2. by ClassName
//  document.getElementsByClassName("")  --> this get the all specifc element which we have given and store that in ARRAY form.

// 3. by IdName
// document.getElementById("")  --> through this we get access to unique Id . Its doesn't store in ARRAY form.

// 4. by querySelector
// document.querySelector("")   --> through this we can access any single element by specifing its class, Id, or tag.

//5. by querySelectorAll
// document.querySelectorAll("")   --> through this we can access all element by specifing its class, Id, or tag and store in ARRAY form.


// We can change style of html element using Js also and to use css properties we have to use camel casing and value will be given in string form.
// document.querySelector("h1").style.color = "red";
// document.querySelector("h1").style.fontSize = "10rem";


// Adding a Class Name in Html Element 
// document.querySelector("h1").classList.add("huge");  --> this will add the class name huge in H1 tag.
// document.querySelector("h1").classList.remove("huge");  --> this will remove the class name huge in H1 tag.
// document.querySelector("h1").classList.toggle("huge");  --> this will check if class is already present then it will remove that class name otherwise it will add that class name.



//Text Manipulation
// document.querySelector("h1").innerHTML="Good Bye"; --> this will change the text written in the h1 tag in this we can add html tag also with text.
// document.querySelector("h1").textContent="Hello"; --> this will change the text writtten in the h1 tag
// document.querySelector("h1").innerHTML="<em>Good Bye</em>" ✅
// document.querySelector("h1").textContent="<em>Hello</em>" ❌

//Attributes Manipulation
// document.querySelector("a").attributes; --> this will show all the attributes present in the 'a' tag.
// document.querySelector("a").getAttribute("href"); --> this will return value assign to this href attributes like www.google.com
// document.querySelector("a").setAttribute("href" , "https://www.bing.com"); --> this will replace the attribute which ever is assign to its with bing.com .


//Event Listeners
//document.querySelector("button").addEventListener("click",handleClick); -->this will call the function handleClick only when User's click on button.
// -->Whenever we are using a eventListener we define two parameter first one is "target" and second is "listener".
// --> In target we define what User will touch,click or type then we have to perform following task("listener")
// --> In listener we can define function , while we are calling function we don't give paranthesis , if we give paranthesis then it will directly all the function.
// document.querySelector("button").addEventListener("click", function(){  --> this method is called anymonuous function.
//    alert("hello i got clicked");
// })

//Audio File
// var tom1 = new Audio("sounds/tom-1.mp3");
// tom1.play();

//KeyBoard Event Listener
// document.addEventListener("keydown",function(event){ --> when we are using keydown event Listener then it passs the object which is going to store in event arugement.
//   console.log(event.key); --> we are accessing the Key element from the Object which is store in event section when key was pressed.
//}) 

//Constructor Function
// function HouseKeeper(name,age,experience,work){ --> whenever we are creating constructor function we should write the first letter of function name in CAPITAL/BLOCK. 
//    this.name=name;  --> this keyword is use to reference the object variable. 
//    this.age=age;    --> still i am confuse related to this keyword.
//    this.experience=experience;
//    this.work=work;
// }
// var houseKeeper1 = new HouseKeeper("aniket",20,10,["bathroom","lobby","washroom"]); --> we created a new object houseKeeper1 using "new" keyword before calling constructor function.
// houseKeeper1.name; --> we can access the name of object using . dot notation 