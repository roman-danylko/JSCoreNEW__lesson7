const text = document.querySelector('.text');
const keyboard = document.querySelectorAll('.keyboard__wrapper');
console.log(keyboard)

window.addEventListener('keydown', function(e){
    if(e.keyCode === 8){
        text.textContent = text.textContent.slice(0,-1);
        
    }else if(e.keyCode === 9){
        text.textContent += '   ';
    }else if(e.keyCode === 13){
        text.textContent += '\n';
    }else if(e.keyCode === 20 || e.keyCode === 16){
        text.textContent = text.textContent;
    }else{
     text.textContent += e.key;
    }
    
    
    document.querySelector(`.${e.code}`).style.backgroundColor = 'grey'
    
    
})

window.addEventListener('keyup', function(e){
    document.querySelector(`.${e.code}`).style.backgroundColor = 'white'
})
