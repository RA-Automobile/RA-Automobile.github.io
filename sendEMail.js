function sendEmail() {
    console.log("drinnen");
    email = document.getElementById("email");
    text = document.getElementById("message");

    full_name = document.getElementById("name");
    console.log(email + " - " + text + " - " + full_name);

    Email.send({
      To : 'ra-automobile@hotmail.com',
      From : email,
      Subject : "Kundenanfrage - " + full_name,
      Body : text
    }).then(
      message => alert(message)
    );
  }