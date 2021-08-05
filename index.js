window.addEventListener("load", function() {
    let numberStart = document.getElementById("numberStart")
    let incrementButton = document.getElementById("incrementButton")
    
    incrementButton.addEventListener("click", function() {
        // let numberConversion = Number(numberStart.innerHTML)
        // numberStart.innerHTML = numberConversion + 1
        let incrementBy = Number(incrementButton.innerHTML[1])
        console.log(incrementBy)
        numberStart.innerHTML = Number(numberStart.innerHTML) + incrementBy
    })
})