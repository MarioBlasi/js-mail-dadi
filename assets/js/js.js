/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, 
in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al
nostro programma così come lo faremmo "a mano" */

//Chiedi all’utente la sua email
//controlla che l' email sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo.

// lista degli utenti autorizzati
// const authorizedUsers = [
//   "user1@example.com",
//   "user2@example.com",
//   "user3@example.com",
// ];

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
