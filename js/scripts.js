function calculate() {
    // Valore dei km che l'utente vuole percorrere

    const KmAmount = document.getElementById("KmInput").value;
    console.log("I km che l'utente vuole percorrere sono", KmAmount);

    // Validazione del valore dei KM

    if (KmAmount <= 0) {
        confirm("Devi impostare un valore superiore a zero");
    }

    // Valore della data di nascita dell'utente

    const DoBInput = document.getElementById("AgeInput").value;
    console.log("La data di nascita dell'utente è", DoBInput);


    // Valore trasformato in data

    const DateOfBirth = new Date(DoBInput);

    // Valore del solo anno di nascita dell'utente

    const UserYear = DateOfBirth.getFullYear();
    console.log("L'anno di nascita dell'utente è:", UserYear);

    // Costo fisso al km

    const KmPrice = 0.21;

    // Calcolo del prezzo del biglietto senza sconti

    const KmFinalPrice = KmAmount * KmPrice;
    console.log("Il prezzo del biglietto senza sconti è di:", KmFinalPrice);

    // Data corrente

    const now = new Date();
    console.log("La data di oggi è:", now);

    // Anno corrente

    const CurrentYear = now.getFullYear();
    console.log("L'anno corrente è:", CurrentYear);

    // Calcolo dell'età dell'utente in anni

    const UserAge = CurrentYear - UserYear;
    console.log("L'età dell'utente è di:", UserAge, "anni.");

    // Validazione dell'anno di nascita

    if (UserAge <= 0) {
        confirm("Devi impostare una data precedente o uguale a oggi");
    }

    // Calcolo del prezzo finale

    let FinalPrice = 0;

    if (UserAge < 18) {
        FinalPrice = (KmFinalPrice - (KmFinalPrice * 0.2));
        console.log("Il prezzo del biglietto scontato sarà di: €" ,FinalPrice);
    }

    else if (UserAge > 65) {
        FinalPrice = (KmFinalPrice - (KmFinalPrice * 0.4));
        console.log("Il prezzo del biglietto scontato sarà di: €" ,FinalPrice);
    }
    
    else {
        FinalPrice = (KmFinalPrice * 1);
        console.log("Il prezzo del biglietto pieno sarà di: €" ,FinalPrice);
    }

    // Stampa del prezzo finale nell'HTML

    let FormatPrice = FinalPrice.toFixed(2)

    document.getElementById('final-price').innerHTML = FormatPrice;
}