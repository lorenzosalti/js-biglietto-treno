//  GLOBAL VARIABLES
const costPerKm = 0.21;
const minorsDiscount = 20;
const oversDiscount = 40;
const minorsAgeLimit = 18;
const oversMinAge = 65;
let ticketPrice = undefined;
let age = prompt('Quanti anni hai?');
let km = prompt('Quanti Km devi percorrere?');

// defining inputs as integers
age = parseInt(age);
km = parseInt(km);

// data verification
if ((Number.isNaN(age)) || (Number.isNaN(km))) {
  // errors alerts
  alert('I dati inseriti non sono corretti');
  alert('Ricaricare la pagina');
} else {
  // price calculation
  ticketPrice = km * costPerKm;
  // apply discount for minors
  if (age < minorsAgeLimit) {
    ticketPrice = ticketPrice - (ticketPrice * minorsDiscount / 100);
  };
  // apply discount for elders
  if (age >= oversMinAge) {
    ticketPrice = ticketPrice - (ticketPrice * oversDiscount / 100);
  };
  // rounding price to 2nd decimal
  ticketPrice = ticketPrice.toFixed(2);
  // logging the correct price
  console.log(`Il prezzo del biglietto è: ${ticketPrice}€`);
};

