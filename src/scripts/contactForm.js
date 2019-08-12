import collection from "./contactCollection.js"
import list from "./contactList.js"

const nameEl = document.querySelector("#contactName")
const phoneEl = document.querySelector("#contactPhone")
const addressEl = document.querySelector("#contactAddress")

const clearForm = () => {
    nameEl.value = ""
    phoneEl.value = ""
    addressEl.value = ""
}

const addSaveEvent = () => {
    document.querySelector("#saveContact").addEventListener("click", e => {
        const newContact = {
            name: nameEl.value,
            phoneNumber: phoneEl.value,
            address: addressEl.value
        }

        collection.createContact(newContact)
            .then(collection.getContacts)
            .then(list.displayContacts)
            .then(clearForm)
    })
}

export default {
    addSaveEvent
}