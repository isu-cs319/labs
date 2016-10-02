// CALCULATOR.JS
//
//
//

// 
var Calc = {

    Model : {
	memVal : undefined,
	operand1 : undefined,
	operand2 : undefined,
	operator : undefined,
	startNew : undefined,
	equalsAgain : undefined
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
	buttonEquals : {id: "buttonEquals", type: "button", value: "=", onclick:"Calc.buttonEqualsHandler()"},
	buttonDecimal : {id: "buttonDecimal", type: "button", value: ".", onclick:"Calc.buttonDecimalHandler()"},
	buttonClear : {id: "buttonClear", type: "button", value: "C", onclick:"Calc.buttonClearHandler()"},
	buttonMemR : {id: "buttonMemR", type: "button", value: "MR", onclick:"Calc.buttonMemRHandler()"},
	buttonMemSub : {id: "buttonMemSub", type: "button", value: "M-", onclick:"Calc.buttonMemSubHandler()"},
	buttonMemAdd : {id: "buttonMemAdd", type: "button", value: "M+", onclick:"Calc.buttonMemAddHandler()"},
	buttonMemClear : {id: "buttonMemClear", type: "button", value: "MC", onclick:"Calc.buttonMemClearHandler()"}
    },

    
    Controller : {

    },

    run : function() {
	Calc.memVal = 0;
	Calc.startNew = true;
	Calc.equalsAgain = false;
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
	Calc.View.button0.onclick = "Calc.button0Handler()";
	Calc.View.button1.onclick = "Calc.button1Handler()";
	Calc.View.button2.onclick = "Calc.button2Handler()";
	Calc.View.button3.onclick = "Calc.button3Handler()";
	Calc.View.button4.onclick = "Calc.button4Handler()";
	Calc.View.button5.onclick = "Calc.button5Handler()";
	Calc.View.button6.onclick = "Calc.button6Handler()";
	Calc.View.button7.onclick = "Calc.button7Handler()";
	Calc.View.button8.onclick = "Calc.button8Handler()";
	Calc.View.button9.onclick = "Calc.button9Handler()";
	Calc.View.buttonAdd.onclick = "Calc.buttonAddHandler()";
	Calc.View.buttonSubtract.onclick = "Calc.buttonSubtractHandler()";
	Calc.View.buttonMultiply.onclick = "Calc.buttonMultiplyHandler()";
	Calc.View.buttonDivide.onclick = "Calc.buttonDivideHandler()";
    },

    button0Handler : function() {
	if (Calc.startNew == true) {
	    document.getElementById("textRow").value = "0";
	    Calc.startNew = false;
	}
	else {
	    document.getElementById("textRow").value += "0";
	}
	Calc.equalsAgain = false;
    },

    button1Handler : function() {
	if (Calc.startNew == true) {
	    document.getElementById("textRow").value = "1";
	    Calc.startNew = false;
	}
	else {
	    document.getElementById("textRow").value += "1";
	}
	Calc.equalsAgain = false;
    },

    button2Handler : function() {
	if (Calc.startNew == true) {
	    document.getElementById("textRow").value = "2";
	    Calc.startNew = false;
	}
	else {
	    document.getElementById("textRow").value += "2";
	}
	Calc.equalsAgain = false;
    },

    button3Handler : function() {
	if (Calc.startNew == true) {
	    document.getElementById("textRow").value = "3";
	    Calc.startNew = false;
	}
	else {
	    document.getElementById("textRow").value += "3";
	}
	Calc.equalsAgain = false;
    },

    button4Handler : function() {
	if (Calc.startNew == true) {
	    document.getElementById("textRow").value = "4";
	    Calc.startNew = false;
	}
	else {
	    document.getElementById("textRow").value += "4";
	}
	Calc.equalsAgain = false;
    },

    button5Handler : function() {
	if (Calc.startNew == true) {
	    document.getElementById("textRow").value = "5";
	    Calc.startNew = false;
	}
	else {
	    document.getElementById("textRow").value += "5";
	}
	Calc.equalsAgain = false;
    },

    button6Handler : function() {
	if (Calc.startNew == true) {
	    document.getElementById("textRow").value = "6";
	    Calc.startNew = false;
	}
	else {
	    document.getElementById("textRow").value += "6";
	}
	Calc.equalsAgain = false;
    },

    button7Handler : function() {
	if (Calc.startNew == true) {
	    document.getElementById("textRow").value = "7";
	    Calc.startNew = false;
	}
	else {
	    document.getElementById("textRow").value += "7";
	}
	Calc.equalsAgain = false;
    },

    button8Handler : function() {
	if (Calc.startNew == true) {
	    document.getElementById("textRow").value = "8";
	    Calc.startNew = false;
	}
	else {
	    document.getElementById("textRow").value += "8";
	}
	Calc.equalsAgain = false;
    },

    button9Handler : function() {
	if (Calc.startNew == true) {
	    document.getElementById("textRow").value = "9";
	    Calc.startNew = false;
	}
	else {
	    document.getElementById("textRow").value += "9";
	}
	Calc.equalsAgain = false;
    },

    buttonDecimalHandler : function() {
	if (Calc.startNew == true) {
	    document.getElementById("textRow").value = ".";
	    Calc.startNew = false;
	}
	else {
	    document.getElementById("textRow").value += ".";
	}
	Calc.equalsAgain = false;
    },

    buttonClearHandler : function() {
	document.getElementById("textRow").value = "";
	Calc.startNew = true;
	Calc.equalsAgain = false;
    },

    buttonMemRHandler : function() {
	document.getElementById("textRow").value = Calc.memVal;
	Calc.startNew = true;
	Calc.equalsAgain = false;
    },

    buttonMemSubHandler : function() {
	Calc.memVal = Calc.memVal - parseFloat(document.getElementById("textRow").value);
	document.getElementById("textRow").value = Calc.memVal;
	Calc.startNew = true;
	Calc.equalsAgain = false;
    },

    buttonMemAddHandler : function() {
	Calc.memVal = Calc.memVal + parseFloat(document.getElementById("textRow").value);
	document.getElementById("textRow").value = Calc.memVal;
	Calc.startNew = true;
	Calc.equalsAgain = false;
    },

    buttonMemClearHandler : function() {
	Calc.memVal = 0;
	document.getElementById("textRow").value = Calc.memVal;
	Calc.startNew = true;
	Calc.equalsAgain = false;
    },

    buttonAddHandler : function() {
	Calc.operand1 = parseFloat(document.getElementById("textRow").value);
	Calc.operator = "+";
	document.getElementById("textRow").value = "+";
	Calc.startNew = true;
	Calc.equalsAgain = false;
    },

    buttonSubtractHandler : function() {
	Calc.operand1 = parseFloat(document.getElementById("textRow").value);
	Calc.operator = "-";
	document.getElementById("textRow").value = "-";
	Calc.startNew = true;
	Calc.equalsAgain = false;
    },

    buttonMultiplyHandler : function() {
	Calc.operand1 = parseFloat(document.getElementById("textRow").value);
	Calc.operator = "*";
	document.getElementById("textRow").value = "*";
	Calc.startNew = true;
	Calc.equalsAgain = false;
    },

    buttonDivideHandler : function() {
	Calc.operand1 = parseFloat(document.getElementById("textRow").value);
	Calc.operator = "/";
	document.getElementById("textRow").value = "/";
	Calc.startNew = true;
	Calc.equalsAgain = false;
    },

    buttonEqualsHandler : function() {
	if (Calc.equalsAgain == false) {
	    Calc.operand2 = parseFloat(document.getElementById("textRow").value);
	}
	if (Calc.equalsAgain == true) {
	    if (Calc.operator == "+") {
		document.getElementById("textRow").value = parseInt(document.getElementById("textRow").value) + Calc.operand2;
	    }
	    else if (Calc.operator == "-") {
		document.getElementById("textRow").value = parseInt(document.getElementById("textRow").value) - Calc.operand2;
	    }
	    else if (Calc.operator == "*") {
		document.getElementById("textRow").value = parseInt(document.getElementById("textRow").value) * Calc.operand2;
	    }
	    else { // divide
		document.getElementById("textRow").value = parseInt(document.getElementById("textRow").value) / Calc.operand2;
	    }
	}
	else if (Calc.operator == "+") {
	    document.getElementById("textRow").value = Calc.operand1 + Calc.operand2;
	}
	else if (Calc.operator == "-") {
	    document.getElementById("textRow").value = Calc.operand1 - Calc.operand2;
	}
	else if (Calc.operator == "*") {
	    document.getElementById("textRow").value = Calc.operand1 * Calc.operand2;
	}
	else { // divide
	    document.getElementById("textRow").value = Calc.operand1 / Calc.operand2;
	}
	Calc.startNew = true;
	Calc.equalsAgain = true;
    }


} // end of Calc;
