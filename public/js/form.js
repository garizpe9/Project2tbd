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