let addToDoButtom = document.getElementById('addTodo')
let toDocontainer = document.getElementById('toDoContainer')
let inputText = document.getElementById('inputText')
let clearToDo = document.getElementById('clearTodo')



addToDoButtom.addEventListener('click',function() {
    let paragraph = document.createElement('p')
    toDocontainerx.appendChild(paragraph)
    paragraph.classList.add('paragraph')
    paragraph.innerHTML = inputText.value
    inputText.value = ''

    paragraph.addEventListener('click',function() {
        if(paragraph.style.textDecoration === 'line-through') {
            paragraph.style.textDecoration = 'none'
        }else{
            paragraph.style.textDecoration = 'line-through'
        }
    })

    clearToDo.addEventListener('click', function() {
        paragraph.remove()
    })

    paragraph.addEventListener('dblclick',function() {
        toDocontainer.removeChild(paragraph)
    })
})


