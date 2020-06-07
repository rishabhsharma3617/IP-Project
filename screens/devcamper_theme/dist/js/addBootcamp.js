var named = document.getElementById('bname')
var address = document.getElementById('baddress')
var phone = document.getElementById('bphone')
var email = document.getElementById('bemail')
var url = document.getElementById('burl')
var desc = document.getElementById('bdesc')
var phone = document.getElementById('bphone')


if(sessionStorage.getItem('u_boot'))
{
    
}

function init()
{
    var career = document.getElementById('bcareer').value
}

document.getElementById('sub').addEventListener('click' , (e) => {

e.preventDefault()
{
    var xhttp = new XMLHttpRequest();
    
    
    
    var cred = {
        name : named.value,
        description : desc.value,
        website : url.value,
        phone : phone.value,
        email : email.value,
        address : address.value,
        housing : document.getElementById('housing').checked,
        jobAssistance : document.getElementById('jobAssistance').checked,
        jobGuarantee : document.getElementById('jobGuarantee').checked,
        acceptGi : document.getElementById('acceptGi').checked,
        careers : [document.getElementById('bcareer').value]
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         alert('Bootcamp Added successfully')
          named.value = ''
          desc.value=''
          url.value = ''
          phone.value = ''
          email.value = ''
          address.value = '',
         document.getElementById('housing').checked = false,
         document.getElementById('jobAssistance').checked = false,
         document.getElementById('jobGuarantee').checked = false,
         document.getElementById('acceptGi').checked = false,
         document.getElementById('bcareer').value = []
        }
        else{
            alert('Bootcamp addition Failed')
        }
         
      };
    console.log(cred)
    xhttp.open("POST", "http://localhost:5000/api/v1/bootcamps", true);
    
  xhttp.setRequestHeader( "Authorization", "Bearer " + sessionStorage.getItem('token') );
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(JSON.stringify(cred));
    
}
})
