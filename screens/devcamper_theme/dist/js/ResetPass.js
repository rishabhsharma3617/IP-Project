var email = document.getElementById('email')
var submit = document.getElementById('submit')


document.getElementById('logoutButton').addEventListener('click',() => {
  sessionStorage.setItem('token','')
  sessionStorage.setItem('u_id','')
  sessionStorage.setItem('role','')
})
if(sessionStorage.getItem('role') !== 'publisher')
{
  console.log('heyy')
  document.getElementById('manage_bootcamp').setAttribute('style','display : none')
  document.getElementById('manage_reviews').setAttribute('style','display : none')
  // document.getElementById('manage_bootcamp').setAttribute('visibility','hidden')
  // document.getElementById('manage_reviews').setAttribute('visibility','hidden')
}
submit.addEventListener('click' , (event) => {
    event.preventDefault()
    var xhttp = new XMLHttpRequest();
    var cred = { email : email.value  }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.response)
        console.log(response)
        alert("Password Updated")
          currPass.value = ''
          newPass.value = ''
          confNewPass.value = ''

      }
      else if(this.readyState == 4 && this.status == 404)
      {
          alert("No user exists with that email")
      }
    };
    
    xhttp.open("POST", "http://localhost:5000/api/v1/auth/forgotpassword", true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(JSON.stringify(cred));
})