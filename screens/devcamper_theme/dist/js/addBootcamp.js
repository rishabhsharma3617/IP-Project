var named = document.getElementById('bname')
var address = document.getElementById('baddress')
var phone = document.getElementById('bphone')
var email = document.getElementById('bemail')
var url = document.getElementById('burl')
var desc = document.getElementById('bdesc')
var phone = document.getElementById('bphone')
var flag = false
 var bootcamp = {}
if(sessionStorage.getItem('u_boot'))
{
    up()
    flag = true
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.response)
        bootcamp = response
        console.log(bootcamp)
        document.getElementById('page_title').innerText = 'Edit Bootcamp'
        document.getElementById('p_val').setAttribute('style','display: none')
        named.value = bootcamp.data.name
          desc.value= bootcamp.data.description
          url.value = bootcamp.data.website
          phone.value = bootcamp.data.phone
          email.value = bootcamp.data.email
          
         document.getElementById('housing').checked = bootcamp.data.housing
         document.getElementById('jobAssistance').checked = bootcamp.data.jobAssistance
         document.getElementById('jobGuarantee').checked = bootcamp.data.jobGuarantee
         document.getElementById('acceptGi').checked = bootcamp.data.acceptGi
         document.getElementById('bcareer').value = bootcamp.data.careers[0]
      }
    };
    
    xhttp.open("GET", `http://localhost:5000/api/v1/bootcamps/${sessionStorage.getItem('u_boot')}`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send();
}

function init()
{
    var career = document.getElementById('bcareer').value
}

document.getElementById('sub').addEventListener('click' , (e) => {

e.preventDefault()

    var xhttp = new XMLHttpRequest();
    var cred = {
        
        description : desc.value,
        website : url.value,
        phone : phone.value,
        email : email.value,
        address : 'hry',
        housing : document.getElementById('housing').checked,
        jobAssistance : document.getElementById('jobAssistance').checked,
        jobGuarantee : document.getElementById('jobGuarantee').checked,
        acceptGi : document.getElementById('acceptGi').checked,
        careers : [document.getElementById('bcareer').value]
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         alert('Bootcamp Added successfully')
         var temp = JSON.parse(this.response)
          named.value = ''
          desc.value=''
          url.value = ''
          phone.value = ''
          email.value = ''
          
         document.getElementById('housing').checked = false,
         document.getElementById('jobAssistance').checked = false,
         document.getElementById('jobGuarantee').checked = false,
         document.getElementById('acceptGi').checked = false,
         document.getElementById('bcareer').value = []
         console.log(JSON.parse( this.response))
        }
        
         
      };
    console.log(cred)
    if(!flag)
    {
        xhttp.open("POST", "http://localhost:5000/api/v1/bootcamps", true);
    }
    else{
        xhttp.open("PUT", `http://localhost:5000/api/v1/bootcamps/${sessionStorage.getItem('u_boot')}`, true);
    }
   
    
  xhttp.setRequestHeader( "Authorization", "Bearer " + sessionStorage.getItem('token') );
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(JSON.stringify(cred));
    

})
