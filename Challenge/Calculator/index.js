var firstNum=[];
var secondNum=[];
var num=[];
var operator=null;
function rem(){
    num=[];
    firstNum=[];
    secondNum=[];
    operator=null;
    $('#display').attr('value',num);
}
function operation(first,operator,second){
    var k;
    if(operator=='+'){
        k=first+second;
    }
    else if(operator=='-'){
        k=first-second;
    }
    else if(operator=='*'){
        k=first*second;
    }
    else if(operator=='/'){
        k=first/second;
    }
    else{
        k=first%second;
    }
    return k; 
}
$("input").click(function(){
    if(this.value=='AC'){
        rem();
    }
    else if(this.value=='DE'){
        num=num.slice(0,num.length-1);
        if(firstNum!=null && operator==null){
            firstNum=firstNum.slice(0,firstNum.length-1);
        }
        else if(firstNum!=null && operator!=null && secondNum!=null){
            secondNum=secondNum.slice(0,secondNum.length-1);
        }
        else if(firstNum!=null && operator!=null && secondNum==null){
            operator=[];
        }
        $('#display').attr('value',num);
    }
    else if(this.value=='='){
        if(firstNum!=null && operator!=null && secondNum!=null){
            $('#display').attr('value',operation(Number(firstNum),operator,Number(secondNum)));
        }
        else if(firstNum!=null && operator!=null && secondNum==null){
            $('#display').attr('value','Invalid Expression');
        }
    }
    else{
        if(this.value=='+' || this.value=='-' || this.value=='*' || this.value=='/' || this.value=='%'){
            operator=this.value;
        }
        else if(operator==null){
            firstNum+=this.value;
        }
        else if(operator!=null){
            secondNum+=this.value;
        }
        num+=this.value;
        $('#display').attr('value',num);
    }    
})
