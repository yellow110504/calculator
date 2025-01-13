var num = ''
var n = '0'
var old_num = '0'
var old_answer= 0
var answe = 0
var sign1 = ''
var sign2 = ''
document.getElementById("answer").innerHTML = n;
document.getElementById("old_answer").innerHTML = '&nbsp;';
function typing(self) {
    if(n == '0'){
        if(self == '.'){
            n = n + self;
            document.getElementById("answer").innerHTML = n;
        } else{
            n = self;
            document.getElementById("answer").innerHTML = n;
            
     }
    }
    else {
        n = n + self;
        document.getElementById("answer").innerHTML = n;
    }
    if(n.length < 12){
        document.getElementById("answer").style.fontSize="55px";
        document.getElementById("answer").style.marginBottom="40px";
    }
    if(n.length == 12){
        document.getElementById("answer").style.fontSize="50px";
        document.getElementById("answer").style.marginBottom="46.5px";
    }
    if(n.length == 13){
        document.getElementById("answer").style.fontSize="47.5px";
        document.getElementById("answer").style.marginBottom="49.5px";
    }
    if(n.length == 14){
        document.getElementById("answer").style.fontSize="45px";
        document.getElementById("answer").style.marginBottom="52.5px";
    }
    if(n.length == 15){
        document.getElementById("answer").style.fontSize="42.5px";
        document.getElementById("answer").style.marginBottom="56.5px";
    }
    if(n.length == 16){
        document.getElementById("answer").style.fontSize="40px";
        document.getElementById("answer").style.marginBottom="59px";
    }
    if(n.length == 17){
        n = n.slice(0,-1)
        document.getElementById("answer").innerHTML = n; 
    }
}

function sign(si){

    sign2 = sign1
    sign1 = si
    
    if(sign2 != ''){
        if(sign2 == '+'){
            old_answer = Number(old_num) + Number(n)
            
        }
        if(sign2 == '-'){
            old_answer = Number(old_num) + Number(n)
            
        }
        if(sign2 == '×'){
            old_answer = Number(old_num) * Number(n)
            
        }
        if(sign2 == '÷'){
            old_answer = Number(old_num) / Number(n)
            
        }
        if(sign2 == '^'){
            old_answer = Math.pow(Number(old_num), Number(n))
            
        }
    } else {
        old_answer = Number(n)
    }
    
    old_num = old_answer
    num = num + n  + si;
    document.getElementById("old_answer").innerHTML = num;
    n = '0'
    if(sign1 == 'C'){
        num = ''
        n = '0'
        old_num = '0'
        old_answer= 0
        answe = 0
        sign1 = ''
        sign2 = ''
        document.getElementById("answer").innerHTML = n;
        document.getElementById("old_answer").innerHTML = '&nbsp;';
    }
    if(sign2 == '='){
        alert("error")
        location.reload(true);
    }
    document.getElementById("answer").innerHTML = old_answer;
}
function root(){
    n = Math.sqrt(Number(n))
    document.getElementById("answer").innerHTML = n;
}
function delet(){
n = n.slice(0,-1)
document.getElementById("answer").innerHTML = n; 
}
if(n.length > 11){
    document.getElementById("answer").style.fontSize="50px";
    document.getElementById("answer").style.marginBottom="46.5px";
}
if(n.length > 12){
    document.getElementById("answer").style.fontSize="47.5px";
    document.getElementById("answer").style.marginBottom="49.5px";
}
if(n.length > 13){
    document.getElementById("answer").style.fontSize="45px";
    document.getElementById("answer").style.marginBottom="52.5px";
}
if(n.length > 14){
    document.getElementById("answer").style.fontSize="42.5px";
    document.getElementById("answer").style.marginBottom="56.5px";
}
if(n.length > 15){
    document.getElementById("answer").style.fontSize="40px";
    document.getElementById("answer").style.marginBottom="59px";
}
if(n.length > 16){
    n = n.slice(0,-1)
    document.getElementById("answer").innerHTML = n; 
}