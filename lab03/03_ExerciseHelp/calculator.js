// CALCULATOR.JS
//
//
//

// 
var Calc = {

Model : {
},


View : {
    textRow : {id: "textRow", type: "text", value: "", onclick:""},
    button0 : {id: "button0", type: "button", value: 0, onclick:""},
    button1 : {id: "button1", type: "button", value: 1, onclick:""},
    button2 : {id: "button2", type: "button", value: 2, onclick:""},
    button3 : {id: "button3", type: "button", value: 3, onclick:""},
    button4 : {id: "button4", type: "button", value: 4, onclick:""},
    button5 : {id: "button5", type: "button", value: 5, onclick:""},
    button6 : {id: "button6", type: "button", value: 6, onclick:""},
    button7 : {id: "button7", type: "button", value: 7, onclick:""},
    button8 : {id: "button8", type: "button", value: 8, onclick:""},
    button9 : {id: "button9", type: "button", value: 9, onclick:""},
    buttonAdd  : {id: "buttonAdd", type: "button", value: "+", onclick:""},
    buttonSubtract : {id: "buttonSubtract", type: "button", value: "-", onclick:""},
    buttonMultiply : {id: "buttonMultiply", type: "button", value: "*", onclick:""},
    buttonDivide : {id: "buttonDivide", type: "button", value: "/", onclick:""},
    buttonEquals : {id: "buttonEquals", type: "button", value: "=", onclick:""},
    buttonDecimal : {id: "buttonDecimal", type: "button", value: ".", onclick:""},
    buttonClear : {id: "buttonClear", type: "button", value: "C", onclick:""},
    buttonMemR : {id: "buttonMemR", type: "button", value: "MR", onclick:""},
    buttonMemSub : {id: "buttonMemSub", type: "button", value: "M-", onclick:""},
    buttonMemAdd : {id: "buttonMemAdd", type: "button", value: "M+", onclick:""},
    buttonMemClear : {id: "buttonMemClear", type: "button", value: "MC", onclick:""}
},

Controller : {

},

run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
    var s;
    s = "<table id=\"myTable\" border=2>"
    s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
    s += "<tr><td>";
    s += Calc.displayElement(Calc.View.button7);
    s += Calc.displayElement(Calc.View.button8);
    s += Calc.displayElement(Calc.View.button9);
    s += Calc.displayElement(Calc.View.buttonAdd);
    s += "<tr><td>";
    s += Calc.displayElement(Calc.View.button4);
    s += Calc.displayElement(Calc.View.button5);
    s += Calc.displayElement(Calc.View.button6);
    s += Calc.displayElement(Calc.View.buttonSubtract);
    s += "<tr><td>";
    s += Calc.displayElement(Calc.View.button1);
    s += Calc.displayElement(Calc.View.button2);
    s += Calc.displayElement(Calc.View.button3);
    s += Calc.displayElement(Calc.View.buttonMultiply);
    s += "<tr><td>";
    s += Calc.displayElement(Calc.View.button0);
    s += Calc.displayElement(Calc.View.buttonDecimal);
    s += Calc.displayElement(Calc.View.buttonEquals);
    s += Calc.displayElement(Calc.View.buttonDivide);
    s += "<tr><td>";
    s += Calc.displayElement(Calc.View.buttonClear);
    s += Calc.displayElement(Calc.View.buttonMemR);
    s += Calc.displayElement(Calc.View.buttonMemSub);
    s += Calc.displayElement(Calc.View.buttonMemAdd);
    s += "<tr><td>";
    s += Calc.displayElement(Calc.View.buttonMemClear);
    s += "</tr></td></table>";
    return s;
},

attachHandlers : function() {
  Calc.View.button7.onclick = "Calc.button7Handler()"; 
},

button7Handler : function() {
  alert("Hi");
}

} // end of Calc;
