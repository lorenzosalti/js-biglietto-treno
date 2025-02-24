//  GLOBAL VARIABLES
const costPerKm = 0.21;
const minorsDiscount = 20;
const oversDiscount = 40;
const minorsAgeLimit = 18;
const oversMinAge = 65;
let ticketPrice = undefined;
let age = prompt('Quanti anni hai?');
let km = prompt('Quanti Km devi percorrere?');
let ageVerify;
let kmVerify;

// data verification
ageVerify = parseInt(age);
kmVerify = parseInt(km);

if ((Number.isNaN(ageVerify)) || (Number.isNaN(kmVerify))) {
  alert('I dati inseriti non sono corretti');
  alert('Ricaricare la pagina');
} 