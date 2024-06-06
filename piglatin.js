const phrase = process.argv.slice(2).map(word => word.toLowerCase());                   // Eingabe Phrase -> Map: Transformation der Elemente als Umwandlung in Kleinbuchstaben

const vowels = ['a','e','i','o','u']                                                    // Variable für Vokale
let newPhrase = ''                                                                      // Initialisierung außerhalb der Blöcke zur Fehlervermeidung
let newWord = ''                                                                        // Initialisierung außerhalb der Blöcke zur Fehlervermeidung

for (let i = 0; i < phrase.length; i++) {
    const word = phrase[i]                                                              // Wörter werden "extrahiert" und einzeln als Variable "word" gespeichert -> für die Funkition
    const firstletter = word[0]                                                         // Variable für 1. Buchstaben 
    const secondletter = word[1]                                                        // Variable für 2. Buchstaben 
    newWord = translate(word, firstletter, secondletter);                               // Binde die translate-Funktion in diesen Bereich ein.
    newPhrase += newWord + ' ';                                                         // Erstelle den Output als 1 Zeile mit Leerzeichen.
}

function translate(word, firstletter, secondletter) {                                   // Funktion übersetzt auf Basis der einzelnen Wörter und der 1. & 2. Buchstaben in PigLatin
    if (vowels.indexOf(firstletter) === -1 && vowels.indexOf(secondletter) === -1) {    // Erster beiden Buchstaben enthalten keinen Vokal (indexOf = -1) 
        const newWord = word.slice(2) + firstletter + secondletter + 'ay'               // Neues Wort: Altes Wort Schnitt vor  3. Buchstabe (Bs) + 1. Bs + 2. Bs + 'ay'
        return newWord                                                                  // Rückgabe für Output
    } else if ((vowels.indexOf(firstletter) === -1)) {                                  // Erster Buchstabe enthält keinen Vokal        
        const newWord = word.slice(1) + firstletter + 'ay'                              // Neues Wort: Altes Wort Schnitt vor 2. Buchstabe (Bs) + 1. Bs  + 'ay'
        return newWord
    } else {                                                                            // Keine Bedingung notwendig, da "else" (indexOf(firstletter) wäre >=0 je nach Indexstelle)                
        const newWord = word + 'way'                                                    // Nur Anhang von 'way'                                                 
        return newWord
    }
}

console.log(newPhrase);