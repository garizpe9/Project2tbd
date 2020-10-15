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
$("#send-fish").on("click", function(event) {
    event.preventDefault();
 
   // // make a newCharacter obj
   var newfish= {
       common_name: $("#commonname").val().trim(),
       scientific_name: $("#sciname").val().trim(),
       max_size: $("#max").val().trim(),
      temp_low: $("#lowtemp").val().trim(),
      temp_high: $("#hightemp").val().trim(),
      ph_low: $("#lowph").val().trim(),
      min_tank: $("#mintank").val().trim(),
      aggressive: $("#aggressive").val().trim(),
      schooling: $("#school").val().trim(),
      min_group: $("#mingroup").val().trim(),
     ph_high: $("#highph").val().trim(),
      tank_level: $("#tanklevel").val().trim(),
      lifespan: $("#life").val().trim()
   };
 
   // send an AJAX POST-request with jQuery
   $.post("/api/newfish", newfish)
     // on success, run this callback
     .then(function(data) {
       // log the data we found
       console.log(data);
   //     // tell the user we're adding a character with an alert window
       alert("Thank you for your contribution!");
    });
 
   // empty each input box by replacing the value with an empty string
   $("#commonname").val(""),
   $("#sciname").val(""),
   $("#max").val(""),
   $("#lowtemp").val(""),
   $("#hightemp").val(""),
   $("#lowph").val(""),
   $("#mintank").val(""),
   $("#aggressive").val(""),
   $("#school").val(""),
   $("#mingroup").val(""),
   $("#highph").val(""),
   $("#tanklevel").val(""),
   $("#life").val("")
 
 
 });

