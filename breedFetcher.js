const request = require('request');
const arg = process.argv.slice(2, process.argv.length);


const url = `https://api.thecatapi.com/v1/breeds/search?name=${arg[0]}`;

request(url, (error, response, body) => {

  if (error) {
    console.error('error:', error);
    return;
  }
// console.log("response", response);
// console.log("body", body);

  const data = JSON.parse(body);
  //console.log("data", data);
  if (body === undefined) {
    console.log(`Breed Not Found ${arg[0]}`);
    return;
  } else {
    console.log(data[0].description);
  }

  
});
