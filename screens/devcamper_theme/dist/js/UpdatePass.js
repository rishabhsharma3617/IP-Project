var newPass = document.getElementById('newPass')
var currPass = document.getElementById('currPass')
var confNewPass = document.getElementById('confNewPass')
var clicked = document.getElementById('subPressed')


clicked.addEventListener('click' , (event) => {
    event.preventDefault()
    var cred={}
    if(newPass.value === confNewPass.value)
    {
        var xhttp = new XMLHttpRequest();
         cred = {  currentPassword : currPass.value, newPassword : newPass.value}
        
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  const response = JSON.parse(this.response)
                  console.log(response)
                  alert("Password Updated")
                    currPass.value = ''
                    newPass.value = ''
                    confNewPass.value = ''

                }
                else if(this.readyState == 4 && this.status == 401)
                {
                    alert("User typed the incorrect password")
                }


              };
         
     
        
        xhttp.open("PUT", "http://localhost:5000/api/v1/auth/updatepassword", true);
        xhttp.setRequestHeader( "Authorization", "Bearer " + sessionStorage.getItem('token') );
        xhttp.setRequestHeader('Content-Type', 'application/json')
        xhttp.send(JSON.stringify(cred));
    }
    else
    {
        alert("Passwords do not match ! Please type again")
        return 
    }
   
})