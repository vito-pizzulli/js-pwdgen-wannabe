const userName = prompt("Inserisci il tuo nome");
const userSurname = prompt("Inserisci il tuo cognome");
const userFavoriteColor = prompt("Inserisci il tuo colore preferito");
document.getElementById("outputPassword").innerHTML = 'La tua password estremamente sicura è ' + userName + userSurname + userFavoriteColor + 23;