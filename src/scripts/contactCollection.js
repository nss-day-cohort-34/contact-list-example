const contactCollection = {
    getContacts() {
        return fetch("http://localhost:8088/contacts")
            .then(res => res.json())
    },
    createContact(contact) {
        return fetch("http://localhost:8088/contacts", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(contact)
        })
            .then(res => res.json())

    }
}

export default contactCollection