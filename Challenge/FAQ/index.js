var questions=document.querySelectorAll(".question")
questions.forEach(function(question){   //traversing the each element
    const btn=question.querySelector(".plus-btn")
    // console.log(btn);
    btn.addEventListener("click",function(){ 
        // console.log(question);
        questions.forEach(function (item) {
            if (item !== question) {
              item.classList.remove("show-text");
            }
          });
          question.classList.toggle("show-text");
    })
})
// $(".question").each(function(questions){
//     $(".plus-btn").each(function(btn){
//         console.log(btn);    write now its not working letter i will implement it
//     });
    
// })