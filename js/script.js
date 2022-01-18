const BTN       =   document.querySelector('.btn-add');
const CONTAINER =   document.querySelector('.container');

BTN.addEventListener('click',addNote);

function addNote(){
    let note     =  document.createElement('div');
    let classe   =  document.createAttribute('class');
    let date     = new Date();
    let hr       = date.getHours();
    let min      = date.getMinutes();

    note.innerHTML = '<textarea name="" class="anotacao__conteudo" placeholder="Sua anotação aqui"></textarea>';
    classe.value = 'single-anotacao';
    note.setAttributeNode(classe);
    note.setAttribute('data-content', `${hr}:${min}`);
    CONTAINER.appendChild(note);
};