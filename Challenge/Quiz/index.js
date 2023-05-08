const question=[
    {   questionNo:1,
        questionName:"How is an array initialized in C language?",
        a:"int a[3]={1,2,4};",
        b:"int a={1,2,4};",
        c:"int a[]=new int[3]",
        d:"int a(3)=[1,2,4];",
        answer:"a"
    },
    {   questionNo:2,
        questionName:"What is required in each C program?",
        a:"The program must have at least one function.",
        b:"The program does not require any function.",
        c:"Input data",
        d:"Output data",
        answer:"a"
    },
    {   questionNo:3,
        questionName:"Which one of the following is a loop construct that will always be executed once?",
        a:"for",
        b:"while",
        c:"switch",
        d:"do while",
        answer:"d"
    },
    {   questionNo:4,
        questionName:"Each instance of a class has a different set of",
        a:"Class interfaces",
        b:"Methods",
        c:"Return types",
        d:"Attribute values",
        answer:"d"
    },
    {   questionNo:5,
        questionName:"What is the maximum number of characters that can be held in the string variable char address line [40]?",
        a:"38",
        b:"39",
        c:"40",
        d:"41",
        answer:"b"
    }
];

const quizNumber=document.querySelector(".quiz-no");
const questionName=document.querySelector(".question");
const optionA=document.querySelector(".option-a");
const optionB=document.querySelector(".option-b");
const optionC=document.querySelector(".option-c");
const optionD=document.querySelector(".option-d");
const inputBtn=document.querySelectorAll(".size");
const submitBtn=document.querySelector('.submit-btn');
const nextBtn=document.querySelector('.next-btn');
window.addEventListener('DOMContentLoaded',function(){
    // const item=question[0];
    // quizNumber.innerHTML=item.questionNo;
    // questionName.innerHTML=item.questionName;
    // optionA.innerHTML=item.a;
    // optionB.innerHTML=item.b;
    // optionC.innerHTML=item.c;
    // optionD.innerHTML=item.d;
    ques();
});
let val;
inputBtn.forEach(function(e){
    e.addEventListener('click',function(){
        // console.log(e);
        // console.log(e.value);
        val=e.value;
        // checkAnswer(e.value);
    })
})
submitBtn.addEventListener('click',function(){
    checkAnswer(val);
    ques();
})
let marks=0,count=0;
nextBtn.addEventListener('click',ques);
function ques(){
    if(count<question.length){
        const item=question[count];
        quizNumber.innerHTML=item.questionNo;
        questionName.innerHTML=item.questionName;
        optionA.innerHTML=item.a;
        optionB.innerHTML=item.b;
        optionC.innerHTML=item.c;
        optionD.innerHTML=item.d;
        count++;
        if(count>question.length-1){
            nextBtn.classList.add('hide');
        }
    }
    
    else{
        //show marks
        let score= (marks/question.length)*100;
        alert(`Congratulations, You Scored ${score}%`);
    }
}
function checkAnswer(k){
    // console.log(k);
    let item=question[count-1];
    if(k===item.answer){
        marks++;
        // alert("got right answer");
    }
    else{
        marks+=0;
        // alert("wrong answer");
    }
}