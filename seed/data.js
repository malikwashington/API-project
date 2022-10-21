let url = "https://swapi.dev/api/people";
import fetch from 'node-fetch'
import { promises as fsPromises } from 'fs'

fetch(url)
  .then(res => {
    return res.json()
  })
  .then(data => {
    fsPromises.writeFile("./people.json", JSON.stringify(data))
  })
  .catch(err => console.log(err))

