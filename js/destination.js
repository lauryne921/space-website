const moonBtn = document.getElementById('moon-select'); 
const marsBtn = document.getElementById('mars-select'); 
const europaBtn = document.getElementById('europa-select'); 
const titanBtn = document.getElementById('titan-select'); 

const container = document.getElementById('container'); 


window.onload = function() {
    moonBtn.classList.add('white'); 
    showPlanet('moon'); 
}

function showPlanet(planetTemplateId) {
    const template = document.getElementById(planetTemplateId); 
    const clone = template.content.cloneNode(true); 

    container.appendChild(clone); 
}

moonBtn.addEventListener('click', () => {
    container.innerHTML = ""; 
    moonBtn.classList.add('white'); 
    marsBtn.classList.remove('white'); 
    europaBtn.classList.remove('white'); 
    titanBtn.classList.remove('white'); 
    showPlanet('moon'); 
}); 

marsBtn.addEventListener('click', () => {
    container.innerHTML = ""; 
    marsBtn.classList.add('white');
    moonBtn.classList.remove('white'); 
    europaBtn.classList.remove('white'); 
    titanBtn.classList.remove('white');  
    showPlanet('mars'); 
}); 

europaBtn.addEventListener('click', () => {
    container.innerHTML = ""; 
    europaBtn.classList.add('white'); 
    moonBtn.classList.remove('white'); 
    marsBtn.classList.remove('white'); 
    titanBtn.classList.remove('white'); 
    showPlanet('europa'); 
}); 

titanBtn.addEventListener('click', () => {
    container.innerHTML = ""; 
    titanBtn.classList.add('white'); 
    moonBtn.classList.remove('white'); 
    marsBtn.classList.remove('white'); 
    europaBtn.classList.remove('white'); 
    showPlanet('titan'); 
}); 
