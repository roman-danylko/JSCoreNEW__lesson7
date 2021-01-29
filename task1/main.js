let colorWrapper = document.querySelectorAll('.color__wrapper');
let colorItem = document.querySelectorAll('.color__item');
let imageWrapper = document.querySelectorAll('.image__wrapper');
let imageItem = document.querySelectorAll('.image__item');
let color = document.querySelector('.color');
let image = document.querySelector('.image');

color.addEventListener('click', function(){
    colorWrapper[0].classList.toggle('active');
    imageWrapper[0].classList.remove('active');
})
image.addEventListener('click', function(){
    colorWrapper[0].classList.remove('active');
    imageWrapper[0].classList.toggle('active');
})

function rundomizer(){
    return Math.round((Math.random())*255)
}

function rundomColor(){
    let r = rundomizer();
    let b = rundomizer();
    let g = rundomizer();

    let color = `rgba(${r}, ${g}, ${b})`;
    return color
}

for(let i = 0; i < colorWrapper[0].children.length; i++){
    
    colorWrapper[0].children[i].style.backgroundColor = rundomColor();
}

function refresh(){
    for(let i = 0; i < colorWrapper[0].children.length; i++){
        colorWrapper[0].children[i].style.backgroundColor = rundomColor();
    }
}

colorWrapper[0].addEventListener('click', function(event){
        if(event.target.className != 'btn'){
        let color = getComputedStyle(event.target).backgroundColor;
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = color;
    }
})

imageWrapper[0].addEventListener('click', function(event){
    let image = getComputedStyle(event.target).backgroundImage;
    document.body.style.backgroundImage = image;
})

