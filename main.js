let box = document.querySelector(".box mb-3")
let selectedOption = document.querySelector("#borderStyle")
let borderWidth = document.querySelector("#borderWidth")
let allCorner = document.querySelector("#borderRadius")
let borderStyle = "";
let widthVal = "";
let styleVal = "";
let borderRad = "";
let displayWidth = document.getElementById('width-val')
let displayBorderRad = document.getElementById('b-rad-val')

//BorderStyle
selectedOption.addEventListener('click', event => {
    styleVal = selectedOption.value
    box.style.borderStyle = `${styleVal}`
})

//BorderWidth
borderWidth.addEventListener('click', event => {
    widthVal = borderWidth.value
    box.style.borderWidth = `${widthVal}`
    displayWidth.innerHTML = `${widthVal}`
    console.log(widthVal)
})

//BorderRadius
allCorner.addEventListener('click' , event => {
    borderRad = allCorner.value
    box.style.borderRadius = `${borderRad}`
    displayBorderRad.innerHTML = `${borderRad}`
})

//border: width + style + color
/* const generateBorderStyle = () => {
    borderStyle = `${widthVal}` + " " + `${styleVal}`;
    //console.log(borderStyle)
} */

