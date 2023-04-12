// var firstNum=[];
// var secondNum=[];
// var num=[];
// var operator=null;
// function rem(){
//     num=[];
//     firstNum=[];
//     secondNum=[];
//     operator=null;
//     $('#display').attr('value',num);
// }
// function operation(first,operator,second){
//     var k;
//     if(operator=='+'){
//         k=first+second;
//     }
//     else if(operator=='-'){
//         k=first-second;
//     }
//     else if(operator=='*'){
//         k=first*second;
//     }
//     else if(operator=='/'){
//         k=first/second;
//     }
//     else{
//         k=first%second;
//     }
//     return k; 
// }
// $("input").click(function(){
//     if(this.value=='AC'){
//         rem();
//     }
//     else if(this.value=='DE'){
//         num=num.slice(0,num.length-1);
//         if(firstNum!=null && operator==null){
//             firstNum=firstNum.slice(0,firstNum.length-1);
//         }
//         else if(firstNum!=null && operator!=null && secondNum!=null){
//             secondNum=secondNum.slice(0,secondNum.length-1);
//         }
//         else if(firstNum!=null && operator!=null && secondNum==null){
//             operator=[];
//         }
//         $('#display').attr('value',num);
//     }
//     else if(this.value=='='){
//         if(firstNum!=null && operator!=null && secondNum!=null){
//             $('#display').attr('value',operation(Number(firstNum),operator,Number(secondNum)));
//         }
//         else if(firstNum!=null && operator!=null && secondNum==null){
//             $('#display').attr('value','Invalid Expression');
//         }
//     }
//     else{
//         if(this.value=='+' || this.value=='-' || this.value=='*' || this.value=='/' || this.value=='%'){
//             operator=this.value;
//         }
//         else if(operator==null){
//             firstNum+=this.value;
//         }
//         else if(operator!=null){
//             secondNum+=this.value;
//         }
//         num+=this.value;
//         $('#display').attr('value',num);
//     }    
// })

var arr=[];
var num=[];
var firstNum,secondNum,result,operator;
$("input").click(function(){
    if(this.value=="AC"){
        //reset function and display function
        arr=[];
        num=[];
        firstNum=0;
        secondNum=0;operator=0;
        displayNumber(num);
    }
    else if(this.value=="DE"){
        //slice function and display function
        removeNumber();
        displayNumber(num);
    }
    else if(this.value=="="){
        //evalutaing function and display function
        displayNumber(evaluvate(arr));
    }
    else{
        //pushing function
        arr.push(this.value);
        num +=this.value;
        displayNumber(num);
    }
});
function removeNumber(){
    num=num.slice(0,num.length-1);
    arr=arr.slice(0,arr.length-1);
}
function displayNumber(value){
    $("#display").attr("value",value);
}
function evaluvate(arr){
    var rem=0;
    var i;
        for(i=0;i<arr.length;i++){
            if(isOperator(arr[i])){
                    firstNum=rem;
                    operator=arr[i];
                    rem=0;
                    break;
            // if(secondNum==null){
            //     secondNum=Number(rem);
            //     rem=0;
            // }
            // if(firstNum!=null && secondNum!=null){
            //     result= operation(firstNum,operator,secondNum);
            //     firstNum=result;
            //     secondNum=null;
            //     result=0;
            //     operator=arr[i];
            // }
            }
            else{
                rem=rem*10+Number(arr[i]);
            }
        }
    for (i=i+1;i<arr.length;i++){
        rem=rem*10+Number(arr[i]);
        if(i==arr.length-1){
            secondNum=rem;
            rem=0;
            break;
        }
    }
    return operation(firstNum,operator,secondNum);
}
function operation(x,y,z){
    if(y=='+'){
        return x+z;
    }
    else if(y=='-'){
        return x-z;
    }
    else if(y=='*'){
        return x*z;
    }
    else if(y=='/'){
        return x/z;
    }
    else{
        return x%z;
    }
}
function isOperator(op){
    if(op=='+' || op=='-' || op=='*' || op=='/' || op=='%'){
        return true;
    }
    else {
        return false;
    }
}