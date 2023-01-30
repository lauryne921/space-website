const numberTech = document.querySelectorAll('.tech-label'); 

const capsule = document.getElementById('capsule'); 
const spaceport = document.getElementById('spaceport'); 
const launchVehicle = document.getElementById('vehicle'); 

const vehicleLabel = document.getElementById('vehicle-label'); 
const capsuleLabel = document.getElementById('capsule-label'); 
const spaceportLabel = document.getElementById('spaceport-label'); 

const container = document.getElementById('container');

window.onload = function() {
    showTechnology('vehicle'); 
}

function showTechnology(technologyTemplateId) {
    const template = document.getElementById(technologyTemplateId); 
    const clone = template.content.cloneNode(true); 

    container.appendChild(clone); 
}

vehicleLabel.addEventListener('click', () => {
    container.innerHTML = ''; 
    showTechnology('vehicle'); 
}); 

capsuleLabel.addEventListener('click', () => {
    container.innerHTML = ''; 
    showTechnology('capsule'); 
}); 

spaceportLabel.addEventListener('click', () => {
    container.innerHTML = ''; 
    showTechnology('spaceport'); 
}); 

