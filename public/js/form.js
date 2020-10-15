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

// $("#button").on("click", function () {
//     event.preventDefault()
//     var inputOne = $("#input1").val()
//     var inputTwo = $("#input2").val()
//     console.log(inputOne, inputTwo)
//     $.post('/email', mailOptions, function(){
//         console.log("Server received data")

// })
// var mailOptions = {
//     from: 'Aquarium4noobs@gmail.com',
//     to: inputOne,
//     subject: 'Fish for your aquarium!',
//     text: 'That was easy!' 
//   };
 
// });
var mailOptions = {
    from: 'Aquarium4noobs@gmail.com',
    to: 'veliaarizpe@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

$("#button").on("click", function () {
    event.preventDefault()

      $.post('/email', mailOptions, function(){
        console.log("Server received data")
        console.log (mailOptions)

    });
});

