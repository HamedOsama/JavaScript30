const keysParent = document.querySelector('.keys'); 
const [...keys] = keysParent.children;
const [...audios] = document.querySelectorAll('audio');
/// add event listener on key press
document.addEventListener('keydown',(e)=>{
    if(e.key.length > 1)
    return;
    const charCode = e.key.toUpperCase().charCodeAt();
    const audio = audios.find((el) => +el.dataset.key === charCode);
    if(!audio)
    return;
    audio.currentTime = 0;
    audio.play()
    const keyBox = keys.find((el) => +el.dataset.key === charCode);
    keyBox.classList.add('playing')
})
// add event listener on click
keysParent.addEventListener('click',(e)=>{
    const target = e.target.closest('.key');
    if(!target)
        return;
    const audio =audios.find((el) => el.dataset.key === target.dataset.key);
    audio.currentTime = 0;
    audio.play();
    target.classList.add('playing');
})
// Remove transform After it's done dynamically
keys.forEach(key=>key.addEventListener('transitionend',function(e){
    if(e.propertyName === 'transform')
        this.classList.remove('playing')
}))