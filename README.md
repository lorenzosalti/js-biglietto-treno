# Biglietto treno

---

## Descrizione

Creare un prgramma in linguaggio JavaScript che gestisca il costo di biglietti per il treno attravero il browser.

---

## Svolgimento

### Variabili

- Costo al km: 0,21€
- Sconto per minorenni: 20%
- Sconto per over 65: 40%
- Età del passeggero: inserita dall'utente
- Km da percorrere: inserita dall'utente
- Prezzo del biglietto: nullo (poi calcolato dal programma)

### Algoritmo

- Raccogliere l'informazione dei km da percorrere
- Raccogliere l'informazione sull'età del passeggero
- Verificare che i dati siano coerenti
- Moltiplicare i km da percorrere per il costo al km
- SE l'età del passeggero è minore di 18 anni
  - Applicare lo sconto per minorenni al prezzo del biglietto
- SE l'età del passeggero è maggiore o uguale a 65
  - Applicare lo sconto per over 65 al prezzo del biglietto
- Arrotondare il prezzo del biglietto al secondo decimale
- Fornire il prezzo del biglietto all'utente