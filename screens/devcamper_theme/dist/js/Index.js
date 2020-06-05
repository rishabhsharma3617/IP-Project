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
