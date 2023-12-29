import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

export const getAll = async () => {
  try {
    return await axios.get(baseUrl)   
  } catch (error) {
    console.log(error)
    return []
  }
}

export const create = async newObject => {
  try {
    return await axios.post(baseUrl, newObject)
  } catch (error) {
    console.log(error)
    return 0
  }
}

export const update = async (id, newObject) => {
  try {
    return await axios.put(`${baseUrl}/${id}`, newObject)
  } catch (error) {
    console.log(error)
    return 0
  }
}

export const deletePerson = async id => {
  try {
    await axios.delete(`${baseUrl}/${id}`)
  } catch (error) {
    console.log(error)
  }
}