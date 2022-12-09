import fetch from 'node-fetch';
import fs from "fs";

// api url
const api_url = "https://api.zippopotam.us/us/33162";
  
const database = [];

// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    const data = await response.json();

    const jdata = JSON.stringify(data);
    // database.push(data);
    console.log(data);

    fs.writeFile("test.json", jdata, function(err) {
    if (err) {
        console.log(err);
    }
    });
}



// Calling that async function
getapi(api_url);



fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

console.log(database);