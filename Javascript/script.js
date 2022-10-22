var a = 12; 
console.log(a);
var b=33
console.log(a+b)



    var a="1" , b="2";
    var c = parseInt(a) , d=parseInt(b);
    console.log(c+d);



    function texstisshecvla (){ 
        
        let a = document.getElementById ("ricxvi").value;

    if (a==0) {
        document.getElementById("answer").innerHTML = a + " ნულის ტოლია";

    }
else if (a>0) {
    document.getElementById("answer").innerHTML = a + " დადებითია";
}

else {
    document.getElementById("answer").innerHTML = a + " დადებითია";
}
    }
    

    function texstisshecvla() {

        let a = document.getElementById ("ricxvi").value;
        let op = document.getElementById ("simbolo").value;
        let b = document.getElementById ("ricxvi2").value;
        
    
        
            switch(op){
                case "+":
                    console.log(a+b);
                    document.getElementById("answer").innerHTML = a + b;
                break;
                case "-": 
                    console.log(a-b);
                    document.getElementById("answer").innerHTML = a - b;
                break;
                case ":":
                    console.log(a/b);
                    document.getElementById("answer").innerHTML = a / b;
                break;
                case "/":
                    console.log(a/b);
                    document.getElementById("answer").innerHTML = a / b;
                break;
                case "x":
                    console.log(a*b);
                    document.getElementById("answer").innerHTML = a * b;
                break;
                case "*":
                    console.log(a*b);
                    document.getElementById("answer").innerHTML = a * b;
                break;
                default: console.log("თქვენ არ ჩაგიწერიათ ოპერატორი");
            }
        }
