var save = document.getElementById('save')
var email = document.getElementById('email')
var nameid = document.getElementById('nameid')
if(sessionStorage.getItem('role') !== 'publisher')
{
  console.log('heyy')
  document.getElementById('manage_bootcamp').setAttribute('style','display : none')
  document.getElementById('manage_reviews').setAttribute('style','display : none')
  // document.getElementById('manage_bootcamp').setAttribute('visibility','hidden')
  // document.getElementById('manage_reviews').setAttribute('visibility','hidden')
}
document.getElementById('logoutButton').addEventListener('click',() => {
    sessionStorage.setItem('token','')
    sessionStorage.setItem('u_id','')
    sessionStorage.setItem('role','')
  })
save.addEventListener('click' , (event) => {
    event.preventDefault()
    var xhttp = new XMLHttpRequest();
    var cred = {}
    console.log(nameid.value)
    if(email.value.length>0 && nameid.value.length<=0)
    {
        cred = {email : email.value}
    }
    else if(email.value.length<=0 && nameid.value.length>0)
    {
        cred = {name : nameid.value}
    }
    else if(email.value.length<=0 && nameid.value.length<=0)
    {
        alert("Please enter the values")
        return 
    }
    else
    {
        cred = {email : email.value , name : nameid.value}
    }
    console.log(cred)
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText)
        email.value = ""
        nameid.value = ""
        alert('User data Updated successfully')
      }

    };
    
    xhttp.open("PUT", "http://localhost:5000/api/v1/auth/updatedetails", true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.setRequestHeader( "Authorization", "Bearer " + sessionStorage.getItem('token') );
    xhttp.send(JSON.stringify(cred));
})