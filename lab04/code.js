
$(document).ready(function() {
		      
    $(document.getElementById("button1")).click( function() {
	$(document.getElementById("p1")).css("background-color", "yellow");
	$(document.getElementById("p2")).css("font-size", "30px");
    });
    
    $(document.getElementById("p3")).hover(function() {
	$(this).css("color", "red");
	$(document.getElementById("p2")).css("margin-left", "20px");
    });
    
    $(document.getElementById("p1")).dblclick( function() {
	$(document.getElementById("p1")).css("border-style", "dotted");
    });
    
    //
    
    $(document.getElementById("flip")).dblclick(function(){
	$(document.getElementById("panel")).slideDown("slow");
    });
    
    $(document.getElementById("button2")).click( function() {
	$(document.getElementById("div1")).fadeIn(1500);
	$(document.getElementById("div2")).fadeIn(3000);
	$(document.getElementById("div3")).fadeIn(5000);
    });
    
    $(document.getElementById("div3")).mouseleave( function() {
	$(this).animate({width: '+=160px'})
    });
    
    $(document.getElementById("button3")).click( function() {
	$(document.getElementById("div1")).animate({bottom: '-=90px'});
	$(document.getElementById("div2")).animate({bottom: '+=90px'}, function() {
	    alert("callback function (sqaures have now moved)");
	});
    });
    
    $(document.getElementById("name")).focus(function(){
	$(this).css("background-color", "purple");
    });
    
    $(document.getElementById("name")).blur(function(){
	$(this).css("background-color", "white");
    });
    
    
});
