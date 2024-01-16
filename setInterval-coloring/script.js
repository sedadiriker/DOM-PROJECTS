const year = document.querySelector('.year p')
const title = document.querySelector('.text')

function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    let color = `rgb(${red},${green},${blue})`

    return color
}
setInterval(function() {
    year.style.color = randomColor()
    title.style.color = randomColor()
}, 1000)





