
if(!sessionStorage.getItem('token'))
{
  document.getElementById('navbarDropdown').setAttribute('style','display  : none')
  
}
else
{
  document.getElementById('loginButt').setAttribute('style','display:none')
  document.getElementById('registerButt').setAttribute('style','display : none')
}

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

var radius = document.getElementById('miles')
var zip = document.getElementById('zip')
var findbyrad = document.getElementById('find')
findbyrad.addEventListener('click' , (event) => {
    console.log(radius.value , zip.value)
    event.preventDefault()
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.response)
        console.log(obj)
        
      }

    };
    
    xhttp.open("GET", `http://localhost:5000/api/v1/bootcamps/radius/${zip.value}/${radius.value}`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send();
})
