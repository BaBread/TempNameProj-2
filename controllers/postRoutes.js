const router = require('express').Router();
const { Post } = require('../../models');
const axios = require('axios');

//Posts the new Vibepost as JSON
const form = document.querySelector('form');
form.addEventListener('submit', async event => {
    event.preventDefault();

    const vibetype = document.querySelector('#vibetype').value; //Needs passed through tag to equal HTML tag
    const contentbody = document.querySelector('#contentbody').value; // Needs passed through tag to equal HTML tag
    const userID = req.session.user_id;

const postData = {
    user_id: userID, //Needs to pull in the User ID from the session/cookie
    vibetype: vibetype,
    contentbody: contentbody,
    };

await axios.post(postData),
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
.then(function (response) {
    response.status(200).json(response);
    console.log(response);
  })
  .catch(function (error) {
    response.status(500).json(error);
    console.log(error);
  });
});

// const options = {
//     url: 'http://localhost:3000/api/home',
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     data: {
//       name: 'David',
//       age: 45
//     }
//   };
  
//   axios(options)
//     .then(response => {
//       console.log(response.status);
//     });

  module.exports = router;



