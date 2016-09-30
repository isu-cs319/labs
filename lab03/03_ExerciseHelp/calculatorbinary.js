// CALCULATORBINARY.JS
//
//
//

// 
var BinCalc = {

Model : {
},


View : {
    textRow : {id: "textRow", type: "text", value: "", onclick:""},
    button0 : {id: "button0", type: "button", value: 0, onclick:""},
    button1 : {id: "button1", type: "button", value: 1, onclick:""},
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
    buttonMemClear : {id: "buttonMemClear", type: "button", value: "MC", onclick:""},
    buttonNot : {id: "buttonNot", type: "button", value: "~", onclick:""},
    buttonMod : {id: "buttonMod", type: "button", value: "%", onclick:""},
    buttonLeft : {id: "buttonLeft", type: "button", value: "<<", onclick:""},
    buttonRight : {id: "buttonRight", type: "button", value: ">>", onclick:""},
    buttonAnd : {id: "buttonAnd", type: "button", value: "&", onclick:""},
    buttonOr : {id: "buttonOr", type: "button", value: "|", onclick:""},
},

Controller : {

},

run : function() {
  BinCalc.attachHandlers();
  console.log(BinCalc.display());
  return BinCalc.display();
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
    s += "<tr><td>" + BinCalc.displayElement(BinCalc.View.textRow) + "</td></tr>";
    s += "<tr><td>";
    s += BinCalc.displayElement(BinCalc.View.button1);
    s += BinCalc.displayElement(BinCalc.View.button0);
    s += BinCalc.displayElement(BinCalc.View.buttonNot);
    s += "<tr><td>";
    s += BinCalc.displayElement(BinCalc.View.buttonAdd);
    s += BinCalc.displayElement(BinCalc.View.buttonMod);
    s += BinCalc.displayElement(BinCalc.View.buttonLeft);
    s += "<tr><td>";
    s += BinCalc.displayElement(BinCalc.View.buttonRight);
    s += BinCalc.displayElement(BinCalc.View.buttonSubtract);
    s += BinCalc.displayElement(BinCalc.View.buttonAnd);
    s += "<tr><td>";
    s += BinCalc.displayElement(BinCalc.View.buttonOr);
    s += BinCalc.displayElement(BinCalc.View.buttonMultiply);
    s += BinCalc.displayElement(BinCalc.View.buttonDivide);
    s += "<tr><td>";
    s += BinCalc.displayElement(BinCalc.View.buttonMemR);
    s += BinCalc.displayElement(BinCalc.View.buttonMemSub);
    s += BinCalc.displayElement(BinCalc.View.buttonMemAdd);
    s += "<tr><td>";
    s += BinCalc.displayElement(BinCalc.View.buttonClear);
    s += BinCalc.displayElement(BinCalc.View.buttonMemClear);
    s += BinCalc.displayElement(BinCalc.View.buttonEquals);
    s += "</tr></td></table>";
    return s;
},

attachHandlers : function() {
  BinCalc.View.button1.onclick = "BinCalc.button1Handler()"; 
},

button1Handler : function() {
  alert("Hi");
}

} // end of BinCalc;
