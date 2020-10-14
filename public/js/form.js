$("#button").on("click", function () {
    event.preventDefault()
    var inputOne = $("#input1").val()
    var inputTwo = $("#input2").val()
    console.log(inputOne, inputTwo)
})

$("#start").on("click", function () {
    var mailOptions = {
        from: 'Aquarium4noobs@gmail.com',
        to: inputOne,
        subject: 'Fish for your aquarium!',
        text: 'That was easy!' //needs to be 
      };
      $.post('/email', mailOptions, function(){
        console.log("Server received data")
    });
