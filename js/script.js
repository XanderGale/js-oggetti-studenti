// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// 1st Step:
// const student = 
// {
//     studentName: 'Alessandro',
//     studentSurname: 'Galeazzi',
//     studentEta: 25
// };


// for (let key in student){
//     alert( key + ' ' + student[key]);
// }


// Step 2
const students =
[
    {
        studentName: 'Alessandro',
        studentSurname: 'Galeazzi',
        studentEta: 25
    },
    {
        studentName: 'Giuseppe',
        studentSurname: 'Salentino',
        studentEta: 19
    },
    {
        studentName: 'Pietro',
        studentSurname: 'Berardi',
        studentEta: 21
    },
];

// Step 3

function pushNew(){

    const addName = prompt('Inserisci il nome del nuovo studente:');
    const addSurname = prompt('Inserisci il cognome del nuovo studente');
    const addEta = parseInt(prompt('Inserisci l\'età del nuovo studente'));

    const newStudent = 
    {
        studentName: addName,
        studentSurname: addSurname,
        studentEta: addEta
    };
    
    console.log(newStudent.studentName);

    students.push(newStudent);
}

function showStudents(){
    for (let i = 0; i < students.length; i++){
        alert(`
        Nome: ${students[i].studentName}
        Cognome: ${students[i].studentSurname}
        Età: ${students[i].studentEta}
        `)
    };
}