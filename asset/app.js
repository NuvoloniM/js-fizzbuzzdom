/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
MILESTONE 2 (Bonus)
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3 ( superbonus )
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
*/

//stampo in console i numeri da 1 a 100

//prendo il div contenitore
let box = document.getElementById('card_container')

//ciclo per scrivere da 1 a 100 nel div
// for (let i = 1; i <= 100; i++) {
//     box.innerHTML += `
//     <div class="card">
//         <div class="number">${i}</div>
//     </div`;
// }

/* 1 Milestone 
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        box.innerHTML += `
        <div class="card">
            <div class="number fizzbuzz"> FizzBuzz </div>
        </div>`
    } else if (i % 3 == 0){
        box.innerHTML += `
        <div class="card">
            <div class="number fizz"> Fizz </div>
        </div>`
    } else if (i % 5 == 0){
        box.innerHTML += `
        <div class="card">
            <div class="number buzz">Buzz</div>
        </div>`
    } else {
        box.innerHTML += `
        <div class="card">
            <div class="number normal"> ${i} </div>
        </div>`
    }
    
}