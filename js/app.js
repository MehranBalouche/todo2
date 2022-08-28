// mehranBalouche
let $ = document;
function _log (value) {console.log(value)}
function _table (value) {console.table(value)}

// flag modal status

let moadalStatus = false;

// Here we have selected the necessary elements
let moadal = $.getElementById('todo_form');
let closeModal = $.getElementById('closeModal');
let todoSubmit = $.getElementById('todo_submit');
let todoInput = $.getElementById('todo_input');
let no_status = $.getElementById('no_status');
let addTodoBtn = $.getElementById('add_btn');
let overlayElem = $.getElementById('overlay');
let form = $.getElementById('form');
let alertEmptyInout = $.getElementById('alertEmptyInout');
// let deleteTodo = $.getElementsByClassName('close')

// handel modal 
function openModal () {
    if (moadalStatus){
        
    }else{
        moadal.classList.add('active');
        overlayElem.style.display = 'block';
        moadalStatus = true;
    }
}
function closeModalByBtn () {
    moadal.classList.remove('active');
    overlayElem.style.display = 'none';
    moadalStatus = false;
}
function closeModalByclickInScreen(event) {
    if (moadalStatus){
        if (event.target === overlayElem) {
            moadal.classList.remove('active');
            overlayElem.style.display = 'none';
            moadalStatus = false;
        }
    }
}
function closeModalByEsc (event) {
    if (moadalStatus){
        if (event.keyCode === 27) {
            moadal.classList.remove('active');
            overlayElem.style.display = 'none';
            moadalStatus = false;
        }
    }
}
function closeModalAfterSubmit () {
    moadal.classList.remove('active');
    overlayElem.style.display = 'none';
    moadalStatus = false;
}

// div by todo class  and span by close class for show todo items
function createTodoElems(value){
    
    const id = ( Math.random() + 1 ).toString(36).substring(7);

    let divElem = $.createElement('div');
    divElem.setAttribute('class', 'todo');
    divElem.setAttribute('draggable', 'true');
    divElem.setAttribute('ondragstart', 'dragStartHandler(event)');
    divElem.setAttribute('id', id);
    divElem.innerHTML = value;

    let spanElm = $.createElement('span');
    spanElm.setAttribute('class', 'close');
    spanElm.innerHTML = '&times;';
    spanElm.addEventListener('click', deleteTodo);

    divElem.appendChild(spanElm);
    no_status.appendChild(divElem);
}

function dragStartHandler (event) {
    // event
    _log(event.dataTransfer.target)
}

function dropHandler (event) {
    event.preventDefault()
}

function dragOverHandler () {
    _log('drop')
}

// here we controle submit form
form.addEventListener('submit', function (event) {
    event.preventDefault()
});

// here we created our todo items
function createTodoItems () {
    let value = todoInput.value;
    
    if (value.trim() === '') {
        alertEmptyInout.style.display = 'block';
        setTimeout(function () {
            alertEmptyInout.style.display = 'none';
        }, 3000)
        return;
    }

    createTodoElems(value);

    todoInput.value = '';
    closeModalAfterSubmit();

}

// here we can delete todo item we want
function deleteTodo (event) {
    event.target.parentElement.remove();
}


//  set events we need to this
addTodoBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalByBtn);
$.body.addEventListener('click', closeModalByclickInScreen);
$.body.addEventListener('keydown', closeModalByEsc);
todoSubmit.addEventListener('click', createTodoItems);



// _log();
// _table();