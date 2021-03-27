const authentication = 'Bearer sk_YOUR KEY HERE'
// you can take your key on https://dashboard.clearbit.com/api after logging in

// when the user inputs the email and presses STALK!
const form = document.querySelector('#clearbitForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // get the email
  const input = document.querySelector('#clearbitEmail');
  const email = input.value;
  // call the api with that email

  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`;

  fetch(url, {
    headers: {
      'Authorization': authentication
    }
  }).then(response => response.json())
    .then((data) => {
      console.log(data)
      // Dig the JSON
      const personData = data.person;
      const bio = personData.bio;
      const email = personData.email;
      const location = personData.location;
      const avatar = personData.avatar;
      const name = personData.name.fullName;

      // insert data to the DOM
      document.getElementById('name').innerText = name;
      document.getElementById('bio').innerText = bio;
      document.getElementById('email').innerText = email;
      document.getElementById('location').innerText = location;
      document.getElementById('avatar').src = avatar;
    });

});
