//Working button
// $( "#start" ).on("click", function(){
//     console.log("this is a test");
// });

$("#start").on("click", function getApi() {
    $.get("/api/fish", function (data) {
        console.log("fish", data)
    })
});

//Working button
///Variable Needs to be dynamic, below is just working code. Needs to pull 30 if 30 gal tank is selected and turned into functions 
var tank = parseInt(20)
var fish = "Barb"
var isaggressivefish = false

//Needs to be put into functions - urls should have value pulling from variables
//Step 1 
$.get("/api/fish/" + tank, function(data) {
    console.log(data);
})

//Step 2
$.get("/api/fish/" + tank+ "/"+ fish, function(data) {
    console.log(data);
})

///Step 3
$.get("/api/fish/" + tank+ "/"+ fish+ "/"+isaggressivefish, function(data) {
    console.log(data);
})
