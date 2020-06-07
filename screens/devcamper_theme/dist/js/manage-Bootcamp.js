function init()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const bootcamp = JSON.parse(this.response)
      console.log(bootcamp)
    }

  };

  xhttp.open("GET", `http://localhost:5000/api/v1/bootcamps/${sessionStorage.getItem('u_boot')}`, true);
  xhttp.setRequestHeader('Content-Type', 'application/json')
  xhttp.send();
}