const leftBar = document.querySelector(".left-bar")
const runBtn = document.querySelector(".run")
const rightBar = document.querySelector(".right-bar")

// Whenever any javascript code is present within the <script> tag, then browser
// will call document.write()

runBtn.addEventListener("click", function()
{
    const enteredCode = leftBar.value
    
    rightBar.contentWindow.document.body.innerHTML = enteredCode
   //  rightBar.contentWindow.document.write(enteredCode)
})


// event bubbling, event capturing
// var vs let
// strict mode
// closures
// function currying
// infinite scroll(image gallery)
// Tic Tac Toe