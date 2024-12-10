const lampImage = document.getElementById('lampImage');
const entrada1Button = document.getElementById('entrada1');
const entrada2Button = document.getElementById('entrada2');
const statusDiv = document.getElementById('status');

let entrada1Ativa = false;
let entrada2Ativa = false;


function updateLamp() {
    if (entrada1Ativa && entrada2Ativa) {
        lampImage.src = './img/ligada.jpg';
        lampImage.classList.add('ligada');
        statusDiv.textContent = 'A lâmpada está acesa. Ambas as entradas são verdadeiras.';
    } else {
        lampImage.src = './img/desligada.jpg';
        lampImage.classList.remove('ligada');
        statusDiv.textContent = 'A lâmpada está desligada. Será ligada somente se ambos os botões forem verdadeiros .';
    }
}


entrada1Button.addEventListener('click', () => {
    entrada1Ativa = !entrada1Ativa;
    entrada1Button.textContent = `${entrada1Ativa ? 'True (1)' : 'False (0)'}`;
    updateLamp();
});

entrada2Button.addEventListener('click', () => {
    entrada2Ativa = !entrada2Ativa;
    entrada2Button.textContent = `${entrada2Ativa ? 'True (1)' : 'False (0)'}`;
    updateLamp();
});

updateLamp();