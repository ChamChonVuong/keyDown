var ekey = document.querySelector('.key p:last-child')
var elocation = document.querySelector('.location p:last-child')
var ewhich = document.querySelector('.which p:last-child')
var ecode = document.querySelector('.code p:last-child')
var alert = document.querySelector('.alert ')
var box = document.querySelector('.box ')
var result = document.querySelector('.result')

document.addEventListener('keydown', e=> {
    ekey.innerText = e.key
    elocation.innerText = e.location
    ewhich.innerText = e.which
    ecode.innerText = e.code

    result.innerHTML = e.code

    alert.classList.add('hide');
    box.classList.remove('hide');
})