const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  const url = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;
  request(url, (error, response, body) => {
  
    const data = JSON.parse(body);
    if (error) {

      callback(error, null);
    // return error;
    } else {
      if (data.length === 0) {
        callback(null, null);
      } else {
        callback(null, data[0].description);
      }
      
    }

  });

  return;
};

module.exports = {fetchBreedDescription};