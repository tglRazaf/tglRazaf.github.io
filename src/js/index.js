window.onresize = ()=>{
    if (window.innerWidth <= 765) {
        document.querySelector('.title').innerText = 'Stephano'
    } else{
        document.querySelector('.title').innerText = 'Stephano Tgl'
    }
}
if (window.innerWidth <= 765) {
    document.querySelector('.title').innerText = 'Stephano'
} else{
    document.querySelector('.title').innerText = 'Stephano Tgl'
}

const getElement = function(el){
    return document.querySelector(el)
}


// modal section
const modal = getElement('.modal')
const contact_btn = getElement('#contact')
const submit_btn = getElement('#submit')
contact_btn.addEventListener('click', togleModal)
submit_btn.addEventListener('click', togleModal)
function togleModal(){
    if (!modal.classList.contains('show')) {
        modal.classList.add('show')
        getElement('.dark-bg').style.display = 'block'
    } else{
        modal.classList.remove('show')
        getElement('.dark-bg').style.display = 'none'
    }
}

