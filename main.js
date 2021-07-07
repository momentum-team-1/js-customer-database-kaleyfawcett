
function renderPageContent() {
    let targetElement = document.querySelector(".customers")



    for (let person of customers) {
        let listPersonElement = document.createElement("div")

        listPersonElement.innerHTML = createPictureElement (person.picture.large)
        listPersonElement.appendChild(createNameElement (person.name.first + " " + person.name.last))
        listPersonElement.appendChild(createEmailElement (person.email))
        listPersonElement.appendChild(createAddressElement (person.location.street + " " + person.location.city + " " + person.location.state + " " + person.location.postcode))
        listPersonElement.appendChild(createBirthDateElement (person.dob))
        listPersonElement.appendChild(createCustomerDate (person.registered))

        targetElement.appendChild(listPersonElement)  
        
    }
}


function createPictureElement (picture) {
    return `<img src = ${picture} >`
}

function createNameElement (name) {
    let nameElement = document.createElement ("h2")
    nameElement.innerText = `${name}`
    return nameElement
    
}

function createEmailElement (email) {
    let emailElement = document.createElement ("section")
    emailElement.innerText = `${email}`
    return emailElement 
}


function createAddressElement (location) {
    let addressElement = document.createElement ("p")
    addressElement.innerText = `${location}`
    return addressElement 
}

function createBirthDateElement (dob) {
    let birthDateElement = document.createElement ("div")
    birthDateElement.innerText = ("DOB: " + moment(dob).format("MMM D, YYYY")) 
    return birthDateElement
}

function createCustomerDate (registered) {
    let customerDateElement = document.createElement ("div")
    customerDateElement.innerText = ("Customer since: " + moment(registered).format("MMM D, YYYY"))
    return customerDateElement 
}


renderPageContent ()