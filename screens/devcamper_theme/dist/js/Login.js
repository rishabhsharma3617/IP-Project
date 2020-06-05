var email = document.getElementById('email')
var password = document.getElementById('password')
var login = document.getElementById('loginButton')

login.addEventListener('click' , (event) => {
    console.log(email.value , password.value)
    event.preventDefault()
    var xhttp = new XMLHttpRequest();
    var cred = { email : email.value , password : password.value }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.response)
        sessionStorage.setItem('token' , response.token)
      }
    };
    
    xhttp.open("POST", "http://localhost:5000/api/v1/auth/login", true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(JSON.stringify(cred));
})