import factory from "./contactFactory.js"

const listLocation = document.querySelector("#contactList")

const displayContacts = (contacts) => {
    listLocation.textContent = ""

    for (const contact of contacts) {
        const contactHTML = factory.createContactHTML(contact)
        listLocation.innerHTML += contactHTML
    }
}

export default {
    displayContacts
}