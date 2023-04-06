//selecting tag
// console.log(jQuery("h1"));
// console.log($("h1"));

// it will change the color of text of h1 tag
// $("h1").css("color","green"); 

// adding single class in h1 tag
// $("h1").addClass("big-title"); 

// adding two or more class in h1 tag
// $("h1").addClass("big-title margin-50"); 

// it will remove class from h1 tag
// $("h1").removeClass("margin-50"); 

// it will give true if h1 tag will have that class otherwise it will give false
// $("h1").hasClass("big-title"); 

// it will change only text of h1 tag
// $("h1").text("bye"); 

// it will change the content if we use html tag also with text.
// $("button").html("<em>Don't Judge me. </em>");

// we use "attr" for getting the value of attributes.
// $("img").attr("src"); 
// $("h1").attr("class");

// when two argument is passed then it will set the value in attributes.
// $("a").attr("href","https://www.bing.com"); 

// click event Listeners
// $("h1").click(function(){
//     $("h1").css("color","purple");
// });

// $("button").click(function(){
//     $("h1").css("color","red");
// })


// keypress event listeners
// $("input").keypress(function(event){
//     console.log(event.key);
// });

// $("body").keypress(function(event){
//     $("h1").text(event.key);
// });

// "on" is also use to add event listener it take two argument 1. listener 2. function
// $("h1").on("mouseover",function(){
//     $("h1").css("color","red");
// })


// adding new html element 
// $("h1").before("<button>new button</button>");
// $("h1").after("<button>new button</button>");
// $("h1").prepend("<button>new button</button>");
// $("h1").append("<button>new button</button>");
// $("button").remove();


// animation 
// $("button").click(function(){
//     $("h1").toggle(); it will hide and unhide the h1 tag text
// });

// $("button").click(function(){
//     $("h1").slideToggle(); it will slide up and slide down the content
// });

// $("button").click(function(){
//     $("h1").animate({opacity: 0.5});  "animate" is use for custom animation it will take only number valued function only.
// });