//  GLOBAL VARIABLES
const costPerKm = 0.21;
const minorsDiscount = 20;
const oversDiscount = 40;
const minorsAgeLimit = 18;
const oversMinAge = 65;
let ticketPrice = undefined;
let age = prompt('Quanti anni hai?');
let km = prompt('Quanti Km devi percorrere?');

// data verification
age = parseInt(age);
km = parseInt(km);

if ((Number.isNaN(age)) || (Number.isNaN(km))) {
  alert('I dati inseriti non sono corretti');
  alert('Ricaricare la pagina');
} else {
  ticketPrice = km * costPerKm;
  if (age < minorsAgeLimit) {
    ticketPrice = ticketPrice - (ticketPrice * minorsDiscount / 100);
  };


};
console.log(ticketPrice);
