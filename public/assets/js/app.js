// ==============================================================================
// NAVBAR FUNCTIONALITY
// ==============================================================================
// Toggle in navbar
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

toggle.addEventListener("click", toggleMenu, false);

// Submenu
const items = document.querySelectorAll(".item");

function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector("submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}

// ==============================================================================

//Working button
// $( "#start" ).on("click", function(){
//     console.log("this is a test");
// });

$("#start").on("click", function getApi() {
    $.get("/api/fish", function (data) {
        console.log("fish", data)
    })
});


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
