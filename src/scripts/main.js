import formMethods from "./contactForm.js"
import apiMethods from "./contactCollection.js"
import list from "./contactList.js"

formMethods.addSaveEvent()

apiMethods.getContacts().then(list.displayContacts)


