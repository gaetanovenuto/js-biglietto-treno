function calculate() {
    const KmAmount = document.getElementById("KmInput").value;
    console.log("I km che l'utente vuole percorrere sono", KmAmount);

    const DoBInput = document.getElementById("AgeInput").value;
    console.log("La data di nascita dell'utente è", DoBInput);

    const DateOfBirth = new Date(DoBInput);

    const UserYear = DateOfBirth.getFullYear();
    console.log("L'anno di nascita dell'utente è:", UserYear);

    const KmPrice = 0.21;

    const KmFinalPrice = KmAmount * KmPrice;
    console.log("Il prezzo del biglietto senza sconti è di:", KmFinalPrice)

    const now = new Date();
    console.log("La data di oggi è:", now)

    const CurrentYear = now.getFullYear();
    console.log("L'anno corrente è:", CurrentYear);

    const UserAge = CurrentYear - UserYear;
    console.log("L'età dell'utente è di:", UserAge, "anni.");

    if (UserAge < 18) {
        let FinalPrice = (KmFinalPrice - (KmFinalPrice * 0.2));
        console.log("Il prezzo del biglietto scontato sarà di: €" ,FinalPrice);
    }

    else if (UserAge > 65) {
        let FinalPrice = (KmFinalPrice - (KmFinalPrice * 0.4));
        console.log("Il prezzo del biglietto scontato sarà di: €" ,FinalPrice);
    }
    
    else {
        let FinalPrice = (KmFinalPrice * 1);
        console.log("Il prezzo del biglietto pieno sarà di: €" ,FinalPrice);
    }

    document.getElementById('final-price').innerHTML = FinalPrice;
}