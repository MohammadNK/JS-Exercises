var firstNum = prompt("عدد اول را وارد کنید (اعداد را به انگلیسی وارد کنید)");
var firstNum = +firstNum;

//

var secondNum = prompt("عدد دوم را وارد کنید (اعداد را به انگلیسی وارد کنید)");
var secondNum = Number(secondNum)

//

var operation = prompt("عملیات را وارد کنید.('ضرب' , '+' , 'توان' و ...)");

 if (operation == "+" || operation == "بعلاوه" || operation == "جمع" ) {
     let sum = firstNum + secondNum
     alert(sum)
 }

 else if (operation == "-" || operation == "منها" || operation == "منفی" || operation == "_" || operation == "تفریق" ) {
     let min = firstNum - secondNum;
     alert(min)
 }

 else if (operation == "*" || operation == "ضرب" || operation == "ضرب در" || operation == "ضربدر") {
     let multiply = firstNum * secondNum;
     alert(multiply)
 }

 else if (operation == "/" || operation == "تقسیم"  ){
     let devine = firstNum / secondNum;
     alert(devine)
 }

 else if (operation == "به توان" || operation == "^" || operation == "**" || operation == "توان" ) {
     let power = firstNum ** secondNum;
     alert(power)
 }

 else {
     alert('عملیات وارد شده اشتباه است')
 }