const createContactHTML = contactObject => {
    return `
        <div class="contact">
            <p>Name: ${contactObject.name}</p>
            <p>Phone: ${contactObject.phoneNumber}</p>
            <p>Address: ${contactObject.address}</p>
        </div>
    `
}

export default {
    createContactHTML
}
