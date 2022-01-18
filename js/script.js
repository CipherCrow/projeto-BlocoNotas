const BTN       =   document.querySelector('.btn-add');
const CONTAINER =   document.querySelector('.container');

BTN.addEventListener('click',addNote);

function addNote(){
    let note     =  document.createElement('div');
    let atributo =  document.createAttribute('class');

    note.innerHTML = '<textarea name="" class="anotacao__conteudo" placeholder="Sua anotação aqui"></textarea>';
    atributo.value = 'single-anotacao';
    note.setAttributeNode(atributo);
    CONTAINER.appendChild(note);
};