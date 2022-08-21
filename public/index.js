'use script'

const volume = document.querySelector('#volume');
const output = document.querySelector('.volume-output');

output.textContent = volume.value;

volume.addEventListener('input', () => {
    output.textContent = volume.value;
});