const array = ['Paris', 'Lyon', 'Montreal', 'Bordeaux']; // array = tableau
const array1 = ['Paris', 33, ['Montreal', 'Bordeaux'], true]; // array = tableau

// console.log(array[2][4]); // premier chiffre pour appeler la ville qu'on veut et 2eme crochet pour appeler le numéro de la lettre de la ville

for (i = 0; i < array1.length; i++) {
    console.log(typeof array1[i]); // pour demander quel type de données il y a dans le tableau
}

array1.sort();
console.log(array1);


const input = document.getElementById('input');
const video = document.getElementById('video');
let ling = "";

input.addEventListener('input', (e) => {
    console.log(e.target.value);

    video.innerHTML = 

})