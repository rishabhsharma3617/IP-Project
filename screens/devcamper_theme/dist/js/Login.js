var email = document.getElementById('email')
var password = document.getElementById('password')
var login = document.getElementById('loginButton')

function init1()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const bootcamps = JSON.parse(this.response)
      
    
    }
  };
  
  xhttp.open("GET", "http://localhost:5000/api/v1/bootcamps", true);
  xhttp.setRequestHeader('Content-Type', 'application/json')
  xhttp.send();
}
function init()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.response)
      console.log(response)
      sessionStorage.setItem('role' , response.data.role)
      sessionStorage.setItem('u_id' , response.data._id)
      init1()
    }
  };
  
  xhttp.open("GET", "http://localhost:5000/api/v1/auth/me", true);
  xhttp.setRequestHeader('Content-Type', 'application/json')
  xhttp.setRequestHeader( "Authorization", "Bearer " + sessionStorage.getItem('token') );
  xhttp.send();
}
login.addEventListener('click' , (event) => {
    console.log(email.value , password.value)
    event.preventDefault()
    var xhttp = new XMLHttpRequest();
    var cred = { email : email.value , password : password.value }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.response)
        console.log(response)
        sessionStorage.setItem('token' , response.token)
        init()
        email.value = ''
        password.value = ''
      }
    };
    
    xhttp.open("POST", "http://localhost:5000/api/v1/auth/login", true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(JSON.stringify(cred));
})