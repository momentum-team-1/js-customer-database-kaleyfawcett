
function renderPageContent() {
    let targetElement = document.querySelector(".customers")

    for (let person of customers) {
        let listPersonElement = document.createElement("li")
        listPersonElement.innerHTML = createNameElement (person.name.first)
        // listPersonElement.createTextNode = createNameElement (person.name.last)
        targetElement.appendChild(listPersonElement)
    }
}

function createNameElement (name) {
    return `${name}`
    // return `${name.first} ${name.last}`


}

renderPageContent ()