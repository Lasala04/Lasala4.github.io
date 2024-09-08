const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
       
        h1.style.color = 'black';
        h1.style.transition = '2s';
       
        p.style.color = 'black';
        p.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';

        h1.style.color = 'white';
        h1.style.transition = '2s';

        p.style.color = 'white';
        p.style.transition = '2s';
    }
})