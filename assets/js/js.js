/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.*/

//Chiedi all’utente la sua email
//controlla che l' email sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo.

function controllaAccesso() {
  const email = document.getElementById("email").value;
  const listaAccesso = [
    "utente1@gmail.com",
    "utente2@gmail.com",
    "utente3@gmail.com",
    "utente4@gmail.com",
    "utente5@gmail.com",
    "utente6@gmail.com",
    "utente7@gmail.com",
    "utente8@gmail.com",
  ];
  if (listaAccesso.includes(email)) {
    document.getElementById("risultato").textContent = "Accesso consentito.";
    risultato.style.background = "green";
  } else {
    document.getElementById("risultato").textContent = "Accesso negato.";
    risultato.style.background = "red";
  }
}

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore,in base a chi fa il punteggio più alto.

// Generare un numero random da 1 a 6
// generare numeri da 1 a 6 per il giocatore sia per il computer
//Stabilire il vincitore,in base a chi fa il punteggio più alto.

// utilizzare macth random // console.log(Math.random()); per il giocatore
// utilizzare macth random // console.log(Math.random()); per il computer
// Assegno un punteggio ad ogni giocatore utilizzando una variabile per ogni giocatore
// Confronto i punteggi per stabilire il vincitore.
//    utilizzando  if per controllare quale punteggio è maggiore.

let numeroCasuale = Math.round(Math.random() * 5) + 1;
console.log(numeroCasuale);
