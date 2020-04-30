//Third part:
console.log ("Script ile is loaded");

$("h1").html("This is done by <em>JavaScript</em>!");

$("h2").toggleClass("blue");

let name = "Anna";


function myLittlefunction() { 
    // number of ps is smaller than 5
    // <, >, <=, >=, ===, !===,
    if ("p").length !===5) { 
        $("main").append("<p>A p is appended in the main.</p>");
    } else {
        console.log ("We reached the maximum")
     }
    
    $("p").css("border", "1px solid red");
    $("p").css("padding", "10px");
}

myLittlefunction();
myLittlefunction();

$("#add").click(myLittlefunction);
$("#remove").click(function () {
$("p:last-child").remove();
 } );

// fourth part

// if (condition that true or else)   { 
// condition is true 
// } else  { }

let colors = ["orange", "yellow", "blue", "lime", "magenta"]

colors.forEach(function (color)  { 
    $("#box-container").append("<div class"box></div>);
 $ (".box:last-child").css("background", color);

});

for (let i = 0; i < 100; i = i + 1) {
    // console.log("I ll not cheat");
    console.log(i);
    
}

//i++ is the same as i= i+1
// $("#box-container").append("<div class"box></div>);
// $ (".box:last-child").css("background", colors[0]);
