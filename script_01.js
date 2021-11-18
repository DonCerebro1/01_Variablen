/***** Variablen 01 *******/

//console.log("Hello, World!");

/****** 03 Deklaration + Wertzuweisung I *******/
//let firstName;                                      //Deklaration (Definition)
//firstName = "Chris";                                //Wertzuweisung
//console.log(firstName);                             //Ausgabe

//let familyName = "Mustermann";                      //Deklaration + Wertzuweisung
//console.log(familyName);                            //Ausgabe
//console.log(firstName + " " + familyName);          //Kombinierte Ausgabe (mit Leerzeichen)


/****** 03 Deklaration + Wertzuweisung II *******/
//let firstName , familyName;
//firstName = prompt("Bitte Vorname eingeben: ");     //prompt öffnet Modul Window zur Eingabe und dann Ausgabe des Namens oder Strings.
//familyName = prompt("Bitte Nachname eingeben: ");   //prompt öffnet Modul Window zur Eingabe und dann Ausgabe des Namens oder Strings.
//console.log(firstName + " " + familyName);          //Kombinierte Ausgabe (mit Leerzeichen)


/****** JS ist eine untypisierte Sprache! | untyped *******/
//let test;
//test = "hi";
//test = 2;
//test = true;
//console.log("Datentyp " + typeof test);             //typeof zeigt einem die Art der Variable an
//console.log("Inhalt: " + test);


/****** 03a Konstanten *******/
//const test = "hi" ;                                 //const muß vorher deklariert werden. Sollte man den Wert der const woanders neu zuweist bekommt man einen Error        
//test = "hallo";                                     //geht nicht weil const zugewiesen ist und constant ist.    
//console.log("Inhalt: " + test);


/****** Beispiel *******/
/****** Deklaration *******/
let ageJohn , ageMark;
let birthYearJohn, birthYearMark;

let date = new Date();                                //Konstrukter
console.log(date.getFullYear());                      //mit getFullYear(); wird nur das Jahr angezeigt sonst das komplette Datum  

// let year = 2021;
// ageJohn = 25;
// ageMark = 30;

// birthYearJohn = year - ageJohn;
// birthYearMark = year - ageMark; 

// console.log("birthYearJohn: " + birthYearJohn);
// console.log("birthYearMark: " + birthYearMark);

