let box = document.getElementById("box")
let selectedOption = document.querySelector("#borderStyle")
let borderWidth = document.querySelector("#borderWidth")
let allCorner = document.querySelector("#borderRadius")
let borderStyle = "";
let widthVal = "";
let styleVal = "";
let borderRad = "";
let displayWidth = document.getElementById('width-val')
let displayBorderRad = document.getElementById('b-rad-val')

//an event listener to the doc once it's loaded
document.addEventListener("DOMContentLoaded", function(){
    //BorderStyle
    selectedOption.addEventListener('change', event => {
    styleVal = selectedOption.value
    box.style.borderStyle = `${styleVal}`
    box.style.borderStyle = event.styleVal
})

//BorderWidth
    borderWidth.addEventListener('input', event => {
    widthVal = borderWidth.value
    box.style.borderWidth = `${widthVal}px`
    displayWidth.innerHTML = `${widthVal}px`
}) 

//BorderRadius
    allCorner.addEventListener('input' , event => {
    borderRad = allCorner.value
    box.style.borderRadius = `${borderRad}%`
    displayBorderRad.innerHTML = `${borderRad}%`
    
})

});




