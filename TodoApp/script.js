let inputText = document.getElementById('inputText')
let todolist = document.getElementById('toDoList')
let addButton = document.getElementById('add')
let clearButton = document.getElementById('clear')

addButton.addEventListener('click', function() {
    let paragraph = document.createElement('p')
    todolist.appendChild(paragraph)
    paragraph.classList.add = 'paragraph'
    paragraph.innerHTML = inputText.value
    inputText.value = ''
    paragraph.style.cursor = 'pointer'

    paragraph.addEventListener('click', function() {
        if(paragraph.style.textDecoration === 'line-through') {
            paragraph.style.textDecoration = 'none'
            
        }else{
            paragraph.style.textDecoration = 'line-through'   
        }
    })

    paragraph.addEventListener('dblclick', function() {
        todolist.removeChild(paragraph)
    })

    clearButton.addEventListener('click',function() {
        paragraph.remove()
    })

})

