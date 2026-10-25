let ime = prompt("unesi svoje ime:");
let cijenaUlaznice = Number(prompt("unesi cijenu jedne ulaznice u eurima:"));
let brojUlaznica = Number(prompt("unesi broj ulaznica:"));
let budzet = Number(prompt("unesi raspolozivi budzet u eurima:"));

let ukupniTrosak = cijenaUlaznice * brojUlaznica;
let preostaliIznos = budzet - ukupniTrosak;
let dovoljnoNovca = budzet >= ukupniTrosak;
let tocanIznos = budzet === ukupniTrosak;
let nastavakPlaniranja = confirm("zelis li nastaviti s planiranjem izleta");
alert(
    "Ime:"+ ime +
    "\nukupni trosak:"+ ukupniTrosak +" eura"+
    "\npreostali iznos:"+ preostaliIznos +" eura"+
    "\ndovoljno novca:"+ dovoljnoNovca +
    "\ntocan iznos:"+ tocanIznos +
    "\nnastavak planiranja:"+ nastavakPlaniranja);
