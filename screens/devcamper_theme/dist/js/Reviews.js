const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams)
const bootcampId = urlParams.get('bootc')
const bootcampTitle = urlParams.get('title')
console.log(bootcampId)
 
document.getElementById('bootBack').setAttribute('href',`bootcamp.html?bootc=${bootcampId}`)

var reviews = {}
function init0()
{
   for(var i =0;i<reviews.count;i++)
   {
       /////////////////////////////////////////
       var div0 = document.createElement('div')
        div0.setAttribute('class','card mb-3')
        /////////////////////////////////////////
        var h50 = document.createElement('h5')
        h50.setAttribute('class','card-header bg-dark text-white')
   }
}
function init()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.response)
        reviews = response
        init0()
        console.log(reviews)
        var rating=0
        for(var i =0;i<reviews.count;i++)
        {
          rating = rating + reviews.data[i].rating
        }
        rating = rating/reviews.count
        var t = document.createTextNode(`${rating}`)
        document.getElementById('rating').appendChild(t)
      }
    };
    
    xhttp.open("GET", `http://localhost:5000/api/v1/bootcamps/${bootcampId}/reviews`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send()
}