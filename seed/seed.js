import data from './people.json' assert {type : 'json'};
import db from '../db/connection.js'
import Character from '../models/Character.js'
import mongoose from 'mongoose';

let characterData = data.results.map((item) => {
  const character = {};
  character.name = item.name
  character.height = item.height
  character.mass = item.mass
  character.hair_color = item.hair_color
  character.eye_color = item.eye_color
  character.birth_year = item.birth_year
  character.gender = item.gender
  character.homeworld = item.homeworld
  character.films = item.films
  character.species = item.species
  character.vehicles = item.vehicles
  character.starships = item.starships
  character.created = item.created
  character.edited = item.edited
  character.url = item.url
    
  return character;
});

const insertData = async () => {
  // reset database
  await Character.deleteMany({});

  // insert data
  await Character.create(characterData);

  // close db connection
  await db.close();
};

insertData();