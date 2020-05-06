
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
    let nameElement = document.createElement ("div")
    nameElement.innerText = `${name}`
    return nameElement
    
}

function createEmailElement (email) {
    let emailElement = document.createElement ("div")
    emailElement.innerText = `${email}`
    return emailElement 
}


function createAddressElement (location) {
    let addressElement = document.createElement ("div")
    addressElement.innerText = `${location}`
    return addressElement 
}

function createBirthDateElement (dob) {
    let birthDateElement = document.createElement ("div")
    birthDateElement.innerText = `DOB: ${dob}`
    return birthDateElement
}

function createCustomerDate (registered) {
    let customerDateElement = document.createElement ("div")
    customerDateElement.innerText = `Customer since: ${registered}`
    return customerDateElement 
}



renderPageContent ()