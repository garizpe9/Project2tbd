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
    $(".main-container").removeClass("hidden")
    $.get("/api/fish", function (data) {
        console.log("fish", data)
    })
});


///Variable Needs to be dynamic, below is just working code. Needs to pull 30 if 30 gal tank is selected and turned into functions 
var tank = ""
var fish = ""
var isaggressivefish = ""

//Needs to be put into functions - urls should have value pulling from variables
//Step 1 

// })
$.get(`/api/fish/${tank}`, function (data) {
    console.log(data);
})
$.get(`/api/fish/${tank}/${fish}`, function (data) {
    console.log(data);
})
$.get(`/api/fish/${tank}/${fish}/${isaggressivefish}`, function (data) {
    console.log(data);
})

//Step 2

// ///Step 3

$(".gallons").on("click", function () {
    let size = $(this).data("gallons")
    switch (size) {
        case "25g":
            $(".main-tank").css("width", "30%")
            break;
        case "50g":
            $(".main-tank").css("width", "50%")
            break;
        case "100g":
            $(".main-tank").css("width", "70%")
            break
    }
    $.get(`/api/fish/${size}`, function (data) {
        console.log(data);
        populateFish(data);
    })
})

function populateFish(data) {
    let fishlib = {}
    data.map(function (item) {
        let [type, subtype] = item.common_name.split("-")
        fishlib[type] ? fishlib[type].push(item) : fishlib[type] = [item]
    })
    console.log(fishlib)
    let fishtarget = $("#fish")
    let typetarget = $("#subtype")
    let fishtypes = Object.keys(fishlib)
    for (var x = 0; x < fishtypes.length; x++) {
        let fish = data[x]
        let fishtype = fishtypes[x]
        let fishcard = `<div>
            ${fishtype}
            <img src="${fishlib[fishtype][0].image}"></img>
            </div>`
        console.log(fishcard)
        let fc = $(fishcard)
        fc.data("type", fishtype)
        fc.on("click", function () {
            typetarget.empty()
            var type = $(this).data("type")
            let fishOfType = fishlib[type]
            fishOfType.map(function (item) {
                let fishcard = `<div>
                ${item.common_name}
                <img src="${item.image}"></img>
                </div>`

                typetarget.append($(fishcard).on("click", function () {
                    $(".main-tank").append($(fishcard).css("width", "100px"))
                }))
            })
        })
        fishtarget.append(fc)
    }
}


