import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const getAllContact = () => {
    return axios.get(baseUrl)
                .then(response => response.data)
                .catch(err=> err)    
            }

const addContact = (contact) => {
    return  axios.post(baseUrl, contact)
                .then(response => response.data)
                .catch(err => err )
}

const updateContact = (id, contact) => {
  return  axios.put (`${baseUrl}/${id}`, contact)
        .then(response => response.data)
        .catch(err => {
            const response = `Information of ${contact.name} has already been removed from server` 
            return response 
        })
}

const deleteContact = (id) => axios.delete(`${baseUrl}/${id}`).then(response => console.log('vacio'))

export  {
    getAllContact,
    addContact,
    updateContact,
    deleteContact
}