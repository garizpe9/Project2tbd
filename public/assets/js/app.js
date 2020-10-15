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

$("#start").on("click", function getApi() {
    $("#start-div").addClass("hidden");
    $("#tank-div").removeClass("hidden");
    $.get("/api/fish", function (data) {
        // console.log("fish", data)
    })
});


///Variable Needs to be dynamic, below is just working code. Needs to pull 30 if 30 gal tank is selected and turned into functions 

var gallonsLeft;
var fish = "";
var isaggressivefish = "";

// var tank = parseInt(20)
// var fish = "Betta"
// var isaggressivefish = false


//Needs to be put into functions - urls should have value pulling from variables
//Step 1 

// $.get(`/api/fish/${tank}`, function (data) {
//     console.log(data);
// })
// $.get(`/api/fish/${tank}/${fish}`, function (data) {
//     console.log(data);
// })
// $.get(`/api/fish/${tank}/${fish}/${isaggressivefish}`, function (data) {
//     console.log(data);
// })

//Step 2

$(".gallons").on("click", function () {
    $("#tank-div").addClass("hidden");
    $("#main-container").removeClass("hidden");
    gallonsLeft = $(this).data("gallons");
    console.log(`Your tank capacity is ${gallonsLeft}.`)
    switch (gallonsLeft) {
        case "25":
            $(".main-tank").css("width", "30%")
            break;
        case "50":
            $(".main-tank").css("width", "50%")
            break;
        case "100":
            $(".main-tank").css("width", "70%")
            break
    }
    $.get(`/api/fish/${gallonsLeft}`, function (data) {
        populateFish(data);
    })
})

//function that obtains tank size and then makes call to 

// function populateFish(data) {
//     let fishlib = data;
//     console.log(fishlib);
//     // data.map(function (item) {
//         // let [type, subtype] = item.common_name.split("-")
//         // fishlib[type] ? fishlib[type].push(item) : fishlib[type] = [item]
//     //     fishlib.push(item);
//     // })
//     // console.log(fishlib)
//     let fishtarget = $("#fish")
//     let typetarget = $("#subtype")
//     let fishtypes = Object.keys(fishlib)
//     for (var x = 0; x < fishtypes.length; x++) {
//         let fish = data[x]
//         let fishtype = fishtypes[x].common_name
//         let fishcard = `<div>
//             ${fishtype}
//             </div>`
//         // console.log(fishcard)
//         let fc = $(fishcard)
//         fc.data("type", fishtype)
//         fc.on("click", function() {
//             typetarget.empty()
//             var type = $(this).data("type")
//             let fishOfType = fishlib[type]
//             fishOfType.map(function (item) {
//                 let fishcard = `<div>
//                 ${item.common_name}
//                 <img src="${item.image}" width=250 height=250></img>
//                 </div>`

//                 typetarget.append($(fishcard).on("click", function () {
//                     $(".main-tank").append($(fishcard).css("width", "100px"))
//                 }))
//             })
//         })
//         fishtarget.append(fc)
//     }
// }

function populateFish(data) {
    let fishlib = {}
    let fishImage;
    let gallons;
    data.map(function (item) {
        let [type, subtype] = item.common_name.split("-")
        fishlib[type] ? fishlib[type].push(item) : fishlib[type] = [item]
    })
    let fishtarget = $("#fish")
    let typetarget = $("#subtype")
    let fishtypes = Object.keys(fishlib)
    for (var x = 0; x < fishtypes.length; x++) {
        let fish = data[x]
        let fishtype = fishtypes[x]
        let fishcard = `<div class="fishcard card">
            <h2>${fishtype}</h2>
            <img src="${fishlib[fishtype][0].image}" width=250></img>
            </div>`
        let fc = $(fishcard)
        fc.data("type", fishtype)
        fc.on("click", function () {
            typetarget.empty()
            var type = $(this).data("type")
            let fishOfType = fishlib[type]
            fishOfType.map(function (item) {
                // let fishImage = ""
                fishImage = `<img src="${item.image}">`
                gallons = `${item.min_tank}`;
                let fishcard = `<div class="fishcard card" style="width: 18rem;">
                <img id="${item.min_tank}" src="${item.image}" width=250></img>
                <div class="card-body">
                <h5 class="card-title">${item.common_name}</h5>
                <p class="card-text">Size: ${item.max_size} inches <br>
                Minimum number: ${item.min_group} fish <br>
                Gallons required: ${item.min_tank} <br>
                Click on the picture to add to tank</p>
                </div>
                </div>`
                fishtarget.empty();
                typetarget.append($(fishcard));
            })
            
            $("img").on("click", function() {
                // let fishImage = `<img src="${item.image}">`;
                $(".main-tank").append($(this).css("width", "100px"));
                gallons=parseInt($(this).attr("id"));
                // console.log($(this).attr("id"));
                gallonsLeft=gallonsLeft-gallons;
                console.log("you have " + gallonsLeft + "gallons left");
                fishtarget.empty();
                typetarget.empty();
                if (gallonsLeft>4) {
                $.get(`/api/fish/${gallonsLeft}`, function(data) {
                    populateFish(data);
                    })
                } else {
                    console.log("your tank is full!")
                }
            })
            let backBtn = `<button class="back">Back to List</button>`;
            fishtarget.append($(backBtn).on("click", function() {
                fishtarget.empty();
                typetarget.empty();
                $.get(`/api/fish/${gallonsLeft}`, function(data) {
                populateFish(data);
                })
            }))            
        })
        fishtarget.append(fc);      
    }
}