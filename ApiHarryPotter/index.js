const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Remplacez cette URL par l'URL de votre frontend
  })
);

const characters = [
  {
    id: 1,
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: "1980",
    eyeColour: "green",
    ancestry: "half-blood",
    hairColor: "black",
  },
  {
    id: 2,
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: "1979",
    eyeColour: "brown",
    ancestry: "muggle-born",
    hairColor: "brown",
  },
  {
    id: 3,
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: "1980",
    eyeColour: "blue",
    ancestry: "pure-blood",
    hairColor: "red",
  },
  {
    id: 4,
    name: "Luna Lovegood",
    species: "human",
    gender: "female",
    house: "Ravenclaw",
    dateOfBirth: "13-02-1981",
    yearOfBirth: "1981",
    eyeColour: "grey",
    ancestry: "pure-blood",
    hairColor: "blonde",
  },
  {
    id: 5,
    name: "Draco Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "05-06-1980",
    yearOfBirth: "1980",
    eyeColour: "grey",
    ancestry: "pure-blood",
    hairColor: "blonde",
  },
  {
    id: 6,
    name: "Ginny Weasley",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "11-08-1981",
    yearOfBirth: "1981",
    eyeColour: "brown",
    ancestry: "pure-blood",
    hairColor: "red",
  },
  {
    id: 7,
    name: "Neville Longbottom",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "30-07-1980",
    yearOfBirth: "1980",
    eyeColour: "brown",
    ancestry: "pure-blood",
    hairColor: "blonde",
  },
  {
    id: 8,
    name: "Cho Chang",
    species: "human",
    gender: "female",
    house: "Ravenclaw",
    dateOfBirth: "22-06-1979",
    yearOfBirth: "1979",
    eyeColour: "black",
    ancestry: "half-blood",
    hairColor: "black",
  },
  {
    id: 9,
    name: "Cedric Diggory",
    species: "human",
    gender: "male",
    house: "Hufflepuff",
    dateOfBirth: "22-09-1977",
    yearOfBirth: "1977",
    eyeColour: "grey",
    ancestry: "pure-blood",
    hairColor: "brown",
  },
  {
    id: 10,
    name: "Bellatrix Lestrange",
    species: "human",
    gender: "female",
    house: "Slytherin",
    dateOfBirth: "02-02-1951",
    yearOfBirth: "1951",
    eyeColour: "brown",
    ancestry: "pure-blood",
    hairColor: "black",
  },
];

app.get("/", (req, res) => {
  res.send("je suis dans le '/' poulet");
});

app.get("/characters", (req, res) => {
  res.json(characters);
});

app.listen("4242", () => {
  console.log("Le serveur est sur http://localhost:4242");
});
