var email = document.getElementById('email')
var password = document.getElementById('password')
var register = document.getElementById('register')
var nameid = document.getElementById('nameid')
var publisher = document.getElementById('publisher')
var user = document.getElementById('user')
var confirmPass = document.getElementById('confirm-password')

if(sessionStorage.getItem('role') !== 'publisher')
{
  console.log('heyy')
  document.getElementById('manage_bootcamp').setAttribute('style','display : none')
  document.getElementById('manage_reviews').setAttribute('style','display : none')
  // document.getElementById('manage_bootcamp').setAttribute('visibility','hidden')
  // document.getElementById('manage_reviews').setAttribute('visibility','hidden')
}

register.addEventListener('click' , (event) => {
    console.log(publisher.checked , user.checked  , email.value , password.value , nameid.value)
    event.preventDefault()
    if(password.value != confirmPass.value)
    {
        alert("Passwords do not match")
        return
    }
    else{
        if(password.value.length < 6 )
        {
        alert("Password must be greater than 6 characters")
        return
        }
    }
        
    var xhttp = new XMLHttpRequest();
    var cred = {
             email : email.value ,
             password : password.value,
             name : nameid.value,
             role : publisher.checked?'publisher':'user'}
             console.log(cred.role)
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert('User Added successfully')
        email.value = ""
        password.value = ""
        nameid.value = ""
        publisher.checked = true
        user.checked = false
        confirmPass.value = ""
      }

    };
    
    xhttp.open("POST", "http://localhost:5000/api/v1/auth/register", true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(JSON.stringify(cred));
})
