
var bootcamp = {}

function init1()
{
    
    document.getElementById('btitle').appendChild(document.createTextNode(`${bootcamp.data.name}`))
    if(bootcamp.data.name === 'codemasters')
    document.getElementById('brating').innerText = '8'
    else
    document.getElementById('brating').innerText = bootcamp.data.averageRating
    document.getElementById('bplace').appendChild(document.createTextNode(`${bootcamp.data.location.city} , ${bootcamp.data.location.state}`))
    document.getElementById('bcarriers').appendChild(document.createTextNode(`${bootcamp.data.careers[0]},${bootcamp.data.careers[1]},${bootcamp.data.careers[2]},`))



}
function init()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     bootcamp = JSON.parse(this.response)
      console.log(bootcamp)
      init1()
    }

  };

  xhttp.open("GET", `http://localhost:5000/api/v1/bootcamps/${sessionStorage.getItem('u_boot')}`, true);
  xhttp.setRequestHeader('Content-Type', 'application/json')
  xhttp.send();
}
document.getElementById('bremove').addEventListener('click' , () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        window.location.replace('add-bootcamp-none.html')
      }
  
    };
  
    xhttp.open("DELETE", `http://localhost:5000/api/v1/bootcamps/${sessionStorage.getItem('u_boot')}`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.setRequestHeader( "Authorization", "Bearer " + sessionStorage.getItem('token') );
    xhttp.send();
})