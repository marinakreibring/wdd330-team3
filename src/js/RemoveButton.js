var removeButton = document.getElementsByClassName("danger")
console.log(removeButton)
for(var i = 0; i < removeButton.length; i++){
    var button = removeButton[i]
    button.addEventListener('click', function(event){
       var buttonclicked = event.target
       buttonclicked.parentElement.remove()
    })
}