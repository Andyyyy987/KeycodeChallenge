const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode h2');
const keyCodeDiv = document.querySelector('.keyCode');
const overlay = document.querySelector('.overlay');

window.addEventListener('keydown',(e)=>{
    overlay.classList.add('hide');
    displayKey.innerText = e.key;
    displayKeyCode.innerText = e.keyCode;
    if(e.keyCode === 32){
        displayKey.innerText = `space`;
    }
})
keyCodeDiv.addEventListener('click', (e)=>{
    const textArea = document.createElement('textarea');
    textArea.value = keyCodeDiv.querySelector('h2').innerText;
    document.body.appendChild(textArea)
    textArea.select();
    document.execCommand('copy')
    document.body.removeChild(textArea);
})