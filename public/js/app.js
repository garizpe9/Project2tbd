// Working button
// $( "#start" ).on("click", function(){
//     alert("this is a test")
// })  

$( "#start" ).on("click", function getApi() {
    $.get("/api/fish", function(data){
        console.log("fish", data)
    })
  });

