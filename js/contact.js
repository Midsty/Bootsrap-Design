const naam = document.getElementById('firstName')
const achternaam = document.getElementById('lastName')
const form = document.getElementById('form')
const foutmelding = document.getElementById('fout')

//Voorkomt de dat de pagina gaat submitten bij fouten
form.addEventListener('submit', (e) => {
    let messages = []
    if (naam,value === '' || naam.value == null) {
        messages.push('Uw Naam Is Verplicht!')
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        foutmelding.innerText = messages.join(', ')
    }
   
})